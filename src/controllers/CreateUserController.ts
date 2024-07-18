import { Request, Response } from "express";

class CreateUserController {
    handle(request: Request, response: Response) {
        const bairros = [
            { 
                "id": 1, 
                "bairro": "Vila Velha", 
                "regional": 1, 
                "territorio": 2 
            },
            { 
                "id": 2,
                "bairro": "Jardim Guanabara", 
                "regional": 1, 
                "territorio": 2 
            },
            { 
                "id": 3,
                "bairro": "Barra do Ceará", 
                "regional": 1, 
                "territorio": 3 
            },
            { 
                "id": 4,
                "bairro": "Cristo Redentor", 
                "regional": 1,
                "territorio": 4 
            },
            { 
                "id": 5,
                "bairro": "Pirambu",
                "regional": 1, 
                "territorio": 4 
            },
            { 
                "id": 6, 
                "bairro": "Carlito Pamplona", 
                "regional": 1, 
                "territorio": 5 
            },
            { 
                "id": 7, 
                "bairro": "Jacarecanga", 
                "regional": 1, 
                "territorio": 5 
            },
            { 
                "id": 8, 
                "bairro": "Jardim Iracema", 
                "regional": 1, 
                "territorio": 6 
            },
            { 
                "id": 9, 
                "bairro": "Floresta", 
                "regional": 1, 
                "territorio": 6 
            },
            { 
                "id": 10, 
                "bairro": "Álvaro Weyne", 
                "regional": 1, 
                "territorio": 6 
            },
            { 
                "id": 11, 
                "bairro": "Meireles", 
                "regional": 2, 
                "territorio": 7 
            },
            { 
                "id": 12, 
                "bairro": "Aldeota", 
                "regional": 2, 
                "territorio": 7 
            },
            { 
                "id": 13, 
                "bairro": "Varjota", 
                "regional": 2, 
                "territorio": 8 
            },
            { 
                "id": 14, 
                "bairro": "Papicu", 
                "regional": 2, 
                "territorio": 8 
            },
            { 
                "id": 15, 
                "bairro": "De Lourdes", 
                "regional": 2, 
                "territorio": 8 
            },
            { 
                "id": 16, 
                "bairro": "Cais do Porto", 
                "regional": 2, 
                "territorio": 9 
            },
            { 
                "id": 17, 
                "bairro": "Mucuripe", 
                "regional": 2, 
                "territorio": 9 
            },
            { 
                "id": 18, 
                "bairro": "Vicente Pinzón", 
                "regional": 2, 
                "territorio": 9 
            },
            { 
                "id": 19, 
                "bairro": "Joaquim Távora", 
                "regional": 2, 
                "territorio": 10 
            },
            { 
                "id": 20, 
                "bairro": "Dionísio Torres", 
                "regional": 2, 
                "territorio": 10 
            },
            { 
                "id": 21, 
                "bairro": "São João do Tauape", 
                "regional": 2, 
                "territorio": 10 
            },
            { 
                "id": 22, 
                "bairro": "Quintino Cunha", 
                "regional": 3, 
                "territorio": 11 
            },
            {
                "id": 23, 
                "bairro": "Olavo Oliveira", 
                "regional": 3, 
                "territorio": 11 
            },
            { 
                "id": 24, 
                "bairro": "Antônio Bezerra", 
                "regional": 3, 
                "territorio": 11 
            },
            { 
                "id": 25, 
                "bairro": "Padre Andrade", 
                "regional": 3, 
                "territorio": 12 
            },
            { 
                "id": 26, 
                "bairro": "Presidente Kennedy", 
                "regional": 3, 
                "territorio": 12 
            },
            { 
                "id": 27, 
                "bairro": "Vila Ellery", 
                "regional": 3, 
                "territorio": 13 
            },
            { 
                "id": 28, 
                "bairro": "Monte Castelo", 
                "regional": 3, 
                "territorio": 13 
            },
            { 
                "id": 29, 
                "bairro": "São Gerardo", 
                "regional": 3, 
                "territorio": 13 
            },
            { 
                "id": 30, 
                "bairro": "Farias Brito", 
                "regional": 3, 
                "territorio": 13 
            },
            { 
                "id": 31, 
                "bairro": "Parque Araxá", 
                "regional": 3, 
                "territorio": 14 
            },
            { 
                "id": 32, 
                "bairro": "Parquelândia", 
                "regional": 3, 
                "territorio": 14 
            },
            { 
                "id": 33, 
                "bairro": "Amadeu Furtado", 
                "regional": 3, 
                "territorio": 14 
            },
            { 
                "id": 34, 
                "bairro": "Rodolfo Teófilo", 
                "regional": 3, 
                "territorio": 14 
            },
            { 
                "id": 35, 
                "bairro": "José Bonifácio", 
                "regional": 4, 
                "territorio": 15 
            },
            { 
                "id": 36, 
                "bairro": "Benfica", 
                "regional": 4, 
                "territorio": 15 
            },
            { 
                "id": 37, 
                "bairro": "Fátima", 
                "regional": 4, 
                "territorio": 15 
            },
            { 
                "id": 38, 
                "bairro": "Damas", 
                "regional": 4, 
                "territorio": 16 
            },
            { 
                "id": 39, 
                "bairro": "Jardim América", 
                "regional": 4, 
                "territorio": 16 
            },
            { 
                "id": 40, 
                "bairro": "Bom Futuro", 
                "regional": 4, 
                "territorio": 16 
            },
            { 
                "id": 41, 
                "bairro": "Montese", 
                "regional": 4, 
                "territorio": 16 
            },
            { 
                "id": 42, 
                "bairro": "Itaoca", 
                "regional": 4, 
                "territorio": 17 
            },
            { 
                "id": 43, 
                "bairro": "Parangaba", 
                "regional": 4, 
                "territorio": 17 
            },
            { 
                "id": 44, 
                "bairro": "Vila Peri", 
                "regional": 4, 
                "territorio": 17 
            },
            { 
                "id": 45, 
                "bairro": "Parreão", 
                "regional": 4, 
                "territorio": 18 
            },
            { 
                "id": 46, 
                "bairro": "Vila União", 
                "regional": 4, 
                "territorio": 18 
            },
            { 
                "id": 47, 
                "bairro": "Aeroporto", 
                "regional": 4, 
                "territorio": 18 
            },
            { 
                "id": 48, 
                "bairro": "Granja Lisboa", 
                "regional": 5, 
                "territorio": 39 
            },
            { 
                "id": 49, 
                "bairro": "Granja Portugal", 
                "regional": 5, 
                "territorio": 39 
            },
            {

                "id": 50, 
                "bairro": "Bom Jardim", 
                "regional": 5, 
                "territorio": 39 
            },
            { 
                "id": 51, 
                "bairro": "Siqueira", 
                "regional": 5, 
                "territorio": 39 
            },
            { 
                "id": 52, 
                "bairro": "Bonsucesso", 
                "regional": 5, 
                "territorio": 39 
            },
            { 
                "id": 53, 
                "bairro": "Alto da Balança", 
                "regional": 6, 
                "territorio": 26 
            },
            { 
                "id": 54, 
                "bairro": "Aerolândia", 
                "regional": 6, 
                "territorio": 26 
            },
            { 
                "id": 55, 
                "bairro": "Jardim das Oliveiras", 
                "regional": 6, 
                "territorio": 27 
            },
            { 
                "id": 56, 
                "bairro": "Cidade dos Funcionários", 
                "regional": 6, 
                "territorio": 27 
            },
            { 
                "id": 57,            
                "bairro": "Parque Manibura", 
                "regional": 6, 
                "territorio": 27 
            },
            { 
                "id": 58, 
                "bairro": "Parque Iracema", 
                "regional": 6, 
                "territorio": 28 
            },
            { 
                "id": 59, 
                "bairro": "Cambeba", 
                "regional": 6, 
                "territorio": 28 
            },
            { 
                "id": 60,                 
                "bairro": "Messejana", 
                "regional": 6, 
                "territorio": 28 
            },
            { 
                "id": 61, 
                "bairro": "José de Alencar", 
                "regional": 6, 
                "territorio": 29 
            },
            { 
                "id": 62, 
                "bairro": "Curió", 
                "regional": 6,
                "territorio": 29 
            },
            { 
                "id": 63, 
                "bairro": "Guajeru", 
                "regional": 6, 
                "territorio": 29 
            },
            { 
                "id": 64, 
                "bairro": "Lagoa Redonda", 
                "regional": 6, 
                "territorio": 29 
            },
            { 
                "id": 65, 
                "bairro": "Coaçu", 
                "regional": 6, 
                "territorio": 30 
            },
            { 
                "id": 66, 
                "bairro": "São Bento", 
                "regional": 6, 
                "territorio": 30 
            },
            { 
                "id": 67, 
                "bairro": "Paupina", 
                "regional": 6, 
                "territorio": 30 
            },
            { 
                "id": 68, 
                "bairro": "Pedras", 
                "regional": 6, 
                "territorio": 30 
            },
            { 
                "id": 69, 
                "bairro": "Praia do Futuro I", 
                "regional": 7, 
                "territorio": 22 
            },
            { 
                "id": 70, 
                "bairro": "Praia do Futuro II", 
                "regional": 7, 
                "territorio": 22 
            },
            { 
                "id": 71, 
                "bairro": "Cocó", 
                "regional": 7, 
                "territorio": 23 
            },
            { 
                "id": 72, 
                "bairro": "Cidade 2000", 
                "regional": 7, 
                "territorio": 23 
            },
            { 
                "id": 73, 
                "bairro": "Manuel Dias Branco", 
                "regional": 7, 
                "territorio": 23 
            },
            { 
                "id": 74, 
                "bairro": "Salinas", 
                "regional": 7, 
                "territorio": 24 
            },
            { 
                "id": 75, 
                "bairro": "Guararapes", 
                "regional": 7, 
                "territorio": 24 
            },
            { 
                "id": 76, 
                "bairro": "Luciano Cavalcante", 
                "regional": 8, 
                "territorio": 24 
            },
            { 
                "id": 77, 
                "bairro": "Edson Queiroz", 
                "regional": 7, 
                "territorio": 25 
            },
            { 
                "id": 78, 
                "bairro": "Sapiranga/Coité", 
                "regional": 8, 
                "territorio": 25 
            },
            { 
                "id": 79, 
                "bairro": "Sabiaguaba", 
                "regional": 8, 
                "territorio": 25 
            },
            {

                "id": 80, 
                "bairro": "Serrinha", 
                "regional": 8, 
                "territorio": 19
            },
            { 
                "id": 81, 
                "bairro": "Itaperi", 
                "regional": 8, 
                "territorio": 19 
            },
            { 
                "id": 82, 
                "bairro": "Dendê", 
                "regional": 8, 
                "territorio": 19 
            },
            { 
                "id": 83, 
                "bairro": "Dias Macêdo", 
                "regional": 8, 
                "territorio": 20 
            },
            { 
                "id": 84, 
                "bairro": "Boa Vista", 
                "regional": 8, 
                "territorio": 20 
            },
            { 
                "id": 85, 
                "bairro": "Parque Dois Irmãos", 
                "regional": 8, 
                "territorio": 20
            },
            { 
                "id": 86, 
                "bairro": "Passaré", 
                "regional": 8, 
                "territorio": 20 
            },
            { 
                "id": 87, 
                "bairro": "Planalto Ayrton Senna", 
                "regional": 8, 
                "territorio": 21 
            },
            { 
                "id": 88, 
                "bairro": "Prefeito José Walter", 
                "regional": 8, 
                "territorio": 21 
            },
            { 
                "id": 89, 
                "bairro": "Cajazeiras", 
                "regional": 9, 
                "territorio": 31 
            },
            { 
                "id": 90, 
                "bairro": "Barroso", 
                "regional": 9, 
                "territorio": 31 
            },
            { 
                "id": 91, 
                "bairro": "Conjunto Palmeiras", 
                "regional": 9, 
                "territorio": 32 
            },
            { 
                "id": 92, 
                "bairro": "Jangurussu", 
                "regional": 9, 
                "territorio": 32 
            },
            { 
                "id": 93, 
                "bairro": "Parque Santa Maria", 
                "regional": 9, 
                "territorio": 33
            },
            { 
                "id": 94, 
                "bairro": "Ancuri", 
                "regional": 9, 
                "territorio": 33 
            },
            { 
                "id": 95, 
                "bairro": "Pedras", 
                "regional": 9, 
                "territorio": 33 
            },
            { 
                "id": 96, 
                "bairro": "Parque São José", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 97, 
                "bairro": "Novo Mondubim", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 98, 
                "bairro": "Canindezinho", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 99, 
                "bairro": "Conjunto Esperança", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 100, 
                "bairro": "Parque Santa Rosa", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 101, 
                "bairro": "Parque Presidente Vargas", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 102, 
                "bairro": "Aracapé", 
                "regional": 10, 
                "territorio": 34 
            },
            { 
                "id": 103, 
                "bairro": "Maraponga", 
                "regional": 10, 
                "territorio": 35 
            },
            { 
                "id": 104, 
                "bairro": "Jardim Cearense", 
                "regional": 10, 
                "territorio": 35 
            },
            { 
                "id": 105, 
                "bairro": "Mondubim", 
                "regional": 10, 
                "territorio": 35 
            },
            { 
                "id": 106, 
                "bairro": "Vila Manoel Sátiro", 
                "regional": 10, 
                "territorio": 35 
            },
            { 
                "id": 107, 
                "bairro": "Pici", 
                "regional": 11, 
                "territorio": 36 
            },
            { 
                "id": 108, 
                "bairro": "Bela Vista", 
                "regional": 11, 
                "territorio": 36 
            },
            { 
                "id": 109, 
                "bairro": "Panamericano", 
                "regional": 11, 
                "territorio": 36 
            },
            { 
                "id": 110, 
                "bairro": "Couto Fernandes", 
                "regional": 11, 
                "territorio": 36 
            },
            { 
                "id": 111, 
                "bairro": "Demócrito Rocha", 
                "regional": 10, 
                "territorio": 36 
            },
            { 
                "id": 112, 
                "bairro": "Austran Nunes", 
                "regional": 11, 
                "territorio": 37 
            },
            { 
                "id": 113, 
                "bairro": "Dom Lustosa", 
                "regional": 11, 
                "territorio": 37 
            },
            { 
                "id": 114, 
                "bairro": "Henrique Jorge", 
                "regional": 11, 
                "territorio": 37 
            },
            { 
                "id": 115, 
                "bairro": "Jóquei Clube", 
                "regional": 11, 
                "territorio": 37 
            },
            { 
                "id": 116, 
                "bairro": "João XXIII", 
                "regional": 11, 
                "territorio": 37 
            },
            { 
                "id": 117, 
                "bairro": "Genibaú", 
                "regional": 11, 
                "territorio": 38 
            },
            { 
                "id": 118, 
                "bairro": "Conjunto Ceará I", 
                "regional": 11, 
                "territorio": 38 
            },
            { 
                "id": 119, 
                "bairro": "Conjunto Ceará II", 
                "regional": 11, 
                "territorio": 38 
            },
            { 
                "id": 120, 
                "bairro": "Conjunto Ceará II", 
                "regional": 12, 
                "territorio": 38 
            },
        ];

        return response.json(bairros);
    }
}

export { CreateUserController };
