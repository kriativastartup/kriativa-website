export const schema = {
  version: "2.0",
  formName: "Kriativuz Project Demo Request",

  steps: [
    {
      id: "identificacao",
      title: "Informações Gerais",
      description:
        "Dados básicos para que possamos entrar em contacto consigo.",

      fields: [
        {
          name: "nome",
          label: "Nome Completo",
          type: "text",
          placeholder: "Ex: João Silva",
          required: true,
        },
        {
          name: "empresa",
          label: "Empresa / Organização",
          type: "text",
          placeholder: "Ex: Empresa X Lda",
          required: true,
        },
        {
          name: "cargo",
          label: "Cargo na Empresa",
          type: "text",
          placeholder: "Ex: Director de TI",
        },
        {
          name: "email",
          label: "Email Profissional",
          type: "email",
          placeholder: "email@empresa.com",
          required: true,
        },
        {
          name: "telefone",
          label: "Telefone / WhatsApp",
          type: "tel",
          placeholder: "+244 9XX XXX XXX",
          required: true,
        },
      ],
    },

    {
      id: "sobre_projeto",
      title: "Sobre o Projeto",
      description:
        "Ajude-nos a entender o contexto e objectivos do seu projecto.",

      fields: [
        {
          name: "descricao",
          label: "Descreva brevemente o seu projecto",
          type: "textarea",
          placeholder: "Explique o que pretende desenvolver ou melhorar...",
          required: true,
        },
        {
          name: "problema",
          label: "Qual problema pretende resolver?",
          type: "textarea",
          placeholder:
            "Ex: Processos manuais, falta de controlo, vendas baixas...",
        },
        {
          name: "ja_possui_sistema",
          label: "Já possui algo em funcionamento?",
          type: "radio",
          options: [
            { label: "Não", value: "nao" },
            { label: "Sim, precisa melhorar", value: "melhorar" },
            { label: "Sim, precisa migrar", value: "migrar" },
          ],
        },
      ],
    },

    {
      id: "servicos",
      title: "Serviços Pretendidos",
      description: "Seleccione os serviços que pretende contratar.",

      fields: [
        {
          name: "servicos",
          label: "Quais serviços pretende?",
          type: "checkbox",
          required: true,
          options: [
            { label: "Desenvolvimento Web", value: "web" },
            { label: "Aplicações Móveis", value: "mobile" },
            { label: "Sistemas Desktop", value: "desktop" },
            { label: "Infraestrutura & Cloud", value: "cloud" },
            { label: "IT & Segurança", value: "security" },
            { label: "Serviços Especializados", value: "special" },
          ],
        },
      ],
    },
  ],

  conditionalSections: {
    web: {
      title: "Desenvolvimento Web",
      description:
        "Detalhes técnicos necessários para estimar o seu projecto web.",

      fields: [
        {
          name: "tipo_web",
          label: "Tipo de projecto web",
          type: "select",
          options: [
            { label: "Website Institucional", value: "institucional" },
            { label: "Loja Virtual (E-commerce)", value: "ecommerce" },
            { label: "Portal / Intranet", value: "portal" },
            { label: "Sistema Web Sob Medida", value: "custom" },
            { label: "API / Integração", value: "api" },
          ],
        },
        {
          name: "login",
          label: "O sistema terá login e registo?",
          type: "boolean",
        },
        {
          name: "pagamentos_online",
          label: "Terá pagamentos online?",
          type: "boolean",
        },
        {
          name: "painel_admin",
          label: "Precisa de painel administrativo?",
          type: "boolean",
        },
        {
          name: "quantos_tipos_usuario",
          label: "Quantos tipos de utilizadores existirão?",
          type: "number",
        },
        {
          name: "usuarios_simultaneos",
          label: "Quantos utilizadores simultâneos espera?",
          type: "number",
        },
      ],
    },
  },

  finalStep: {
    title: "Planejamento & Orçamento",
    description: "Informações finais para estimarmos prazo e investimento.",

    fields: [
      {
        name: "orcamento",
        label: "Qual é o orçamento estimado para este projeto?",
        type: "select",
        options: [
          { label: "Até 500.000 Kz", value: "<500k" },
          { label: "500.000 Kz a 2.000.000 Kz", value: "500k-2M" },
          { label: "2M a 10M Kz", value: "2M-10M" },
          { label: "Acima de 10M Kz", value: "+10M" },
          { label: "Preciso de orientação para definir", value: "consultar" },
        ],
      },

      {
        name: "inicio_previsto",
        label: "Quando pretende iniciar o projeto?",
        type: "date",
      },

      {
        name: "data_entrega",
        label: "Existe uma data limite para entrega?",
        type: "date",
      },

      {
        name: "decisor_final",
        label: "Você é o decisor final do projeto?",
        helperText: "Caso não seja, quem mais estará envolvido na aprovação?",
        type: "boolean",
      },

      {
        name: "orcamento_aprovado",
        label: "O orçamento já está aprovado internamente?",
        helperText: "Isso nos ajuda a entender a maturidade da oportunidade.",
        type: "boolean",
      },

      {
        name: "ja_falou_com_outra_empresa",
        label: "Já está em negociação com outra empresa?",
        helperText:
          "Não interfere na nossa proposta, apenas nos ajuda a entender o cenário.",
        type: "boolean",
      },

      {
        name: "upload_documentos",
        label: "Deseja anexar documentos (RFP, briefing, planilhas, etc.)?",
        type: "file",
      },
    ],
  },
};
