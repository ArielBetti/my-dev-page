### Primeiros passos

#### Rodando projeto

Baixe os pacotes

`npm i` ou `yarn`

Após isso configure as envs do projeto e execute o script

`npm run dev` ou `yarn dev`

#### Configurando projeto.

Para utilizar o blog da melhor forma possível você precisa fazer algumas configurações, primeiro é criar um arquivo `.env.local` para desenvolvimento e definir as suas variaveis de ambientes

```
GITHUB_ACCESS_TOKEN={{Seu token do github}}
HYGRAPH_API={{Sua API gerada no Hygraph}}
```

#### Como gerar o token do github

Acesse o [GitHub](https://github.com/) `settings/Developer settings/Personal access tokens/Personal access tokens` o seu token precisa ter duas permissões `public_repo ` e `read:user` são apenas permissões de leitura para listar os seus repos pinnados, você pode fazer qualquer outra implementação que quiser.

#### Como gerar uma API no Hygraph

Acesse o [Hygraph](https://app.hygraph.com/) crie um novo projeto em branco e depois procure por **Schema** o projeto atualmente utiliza essa estrutura de schema.

![image.PNG](https://media.graphassets.com/9CoMpnncSUEXXXpsTD1q)

Após criar seu schema você pode criar posts na aba **content** após isso `Project Settings/API Access/Content API` com essa API você pode ler todos os posts feitos dentro da plataforma, você pode explorar e fazer qualquer integração que quiser.

Após fazer essas configurações no seu `.env.local` você pode rodar o projeto
`yarn` ou `npm i` após baixar todos os arquivos utilize `yarn dev` ou `npm run dev`.

#### Entendendo o projeto

O projeto possui algumas interfaces que são arquivos de tipo, você deve alterar caso mude a estrutura dos posts ou adicione alguma nova integração no projeto na pasta **interfaces** como no exemplo:

**Interface**
```typescript
export interface IPost {
  __typename: string;
  createdAt: string;
  date: string;
  id: string;
  publishedAt?: string;
  slug: string;
  subtitle: string;
  title: string;
  updatedAt: string;
  content: string;
  color: {
    __typename: string;
    hex: string;
  };
}
```

**Type**

```
    export type TFeedback = "error" | "success" | "warning" | "info"
```

#### Entendendo estrutura GraphQl

Na pasta **graphql** você pode criar uma nova pasta para integrações no graphql a estrutura inicial contem dois arquivos por pasta **client.ts** e **queries.ts**

#### client.ts

Esse arquivo é onde você vai configurar o ApolloClient ele exporta os arquivos `export { authLink, client, httpLink };` exemplo:

```typescript
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,

      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});

export { authLink, client, httpLink };

```

#### queries.ts

Esse arquivo é onde fica as queries do graphQl exemplo:

```typescript
import { gql } from "@apollo/client";
import { client } from "./client";

export const getUser = client.query({
  query: gql`
    {
      user(login: "arielbetti") {
        name
        url
        location
        bio
        avatarUrl
      }
    }
  `,
});
```

### Contribuindo para o projeto

> ```
> tag: descrição
> ```
> A **tag** deve ser o tipo de alteração, seguindo a referencia que estará abaixo com checkbox;\
> E a  **descrição** deve ser uma mensagem de commit simples, que abranja todas as alterações dentro do PR;

### Que tipo de alteração esta revisão de código introduz? (Tag)
- [ ] `feat` Nova funcionalidade
- [ ] `fix` Correção de um bug
- [ ] `docs` Atualização de documentação
- [ ] `refact` Alteração no código que não é funcionalidade nova nem correção de bug
- [ ] `perf` Melhoria de performance
- [ ] `test` Adição, alteração ou remoção de testes
- [ ] `build` Alteração no processo de build ou em dependencias externas
- [ ] `ci` Alteração de pipeline ou fluxo de publicação
- [ ] `chore` Outras alterações que não modificam arquivos base ou arquivos de teste
- [ ] `revert` Reversão de commits anteriores

**Exemplo**: `feat/tip-card-component`

