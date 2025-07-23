// Serviço para integração com a API ViaCEP
export const cepService = {
  /**
   * Valida o formato do CEP
   * @param {string} cep - CEP a ser validado
   * @returns {boolean} - true se o CEP é válido, false caso contrário
   */
  isValidCep(cep) {
    if (!cep) return false;
    
    // Remove caracteres não numéricos
    const cleanCep = cep.replace(/\D/g, '');
    
    // Verifica se tem exatamente 8 dígitos
    return cleanCep.length === 8;
  },

  /**
   * Formata o CEP adicionando hífen
   * @param {string} cep - CEP a ser formatado
   * @returns {string} - CEP formatado
   */
  formatCep(cep) {
    if (!cep) return '';
    
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length === 8) {
      return `${cleanCep.slice(0, 5)}-${cleanCep.slice(5)}`;
    }
    
    return cleanCep;
  },

  /**
   * Consulta o endereço pelo CEP usando a API ViaCEP
   * @param {string} cep - CEP a ser consultado
   * @returns {Promise<Object>} - Dados do endereço ou erro
   */
  async fetchAddressByCep(cep) {
    try {
      // Remove caracteres não numéricos
      const cleanCep = cep.replace(/\D/g, '');
      
      // Valida o formato do CEP
      if (!this.isValidCep(cleanCep)) {
        throw new Error('CEP deve conter exatamente 8 dígitos numéricos');
      }

      // Faz a requisição para a API ViaCEP
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      
      if (!response.ok) {
        throw new Error('Erro na consulta do CEP');
      }

      const data = await response.json();

      // Verifica se o CEP foi encontrado
      if (data.erro) {
        throw new Error('CEP não encontrado');
      }

      // Retorna os dados formatados
      return {
        success: true,
        data: {
          cep: data.cep,
          logradouro: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf,
          estado: data.estado,
          regiao: data.regiao,
          ibge: data.ibge,
          ddd: data.ddd
        }
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  },

  /**
   * Pesquisa CEPs por endereço (UF, cidade e logradouro)
   * @param {string} uf - Estado (UF)
   * @param {string} cidade - Nome da cidade
   * @param {string} logradouro - Nome do logradouro
   * @returns {Promise<Object>} - Lista de CEPs encontrados ou erro
   */
  async searchCepByAddress(uf, cidade, logradouro) {
    try {
      // Valida os parâmetros mínimos
      if (!uf || uf.length !== 2) {
        throw new Error('UF deve conter exatamente 2 caracteres');
      }

      if (!cidade || cidade.length < 3) {
        throw new Error('Cidade deve conter pelo menos 3 caracteres');
      }

      if (!logradouro || logradouro.length < 3) {
        throw new Error('Logradouro deve conter pelo menos 3 caracteres');
      }

      // Faz a requisição para a API ViaCEP
      const response = await fetch(
        `https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`
      );
      
      if (!response.ok) {
        throw new Error('Erro na pesquisa de CEP');
      }

      const data = await response.json();

      // Verifica se encontrou resultados
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Nenhum CEP encontrado para este endereço');
      }

      return {
        success: true,
        data: data.map(item => ({
          cep: item.cep,
          logradouro: item.logradouro,
          complemento: item.complemento,
          bairro: item.bairro,
          localidade: item.localidade,
          uf: item.uf,
          estado: item.estado,
          regiao: item.regiao,
          ibge: item.ibge,
          ddd: item.ddd
        }))
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
};

