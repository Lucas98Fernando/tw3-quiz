import db from '../../db.json';

// Lambda server
export default function dbApi(request, response) {
    // API que devolve um json através da URL
    // Configuração para que a API possa ser acessada por qualquer pessoa
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    // Cabeçalhos informando para o browser que a API pode ser consumida por terceiros
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    response.json(db);
}