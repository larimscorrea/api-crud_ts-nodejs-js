import { Request, Response } from "express";

class CreateUserController {
    handle(request: Request, response: Response) {
        return response.json([
            {
                name: 'Larissa'
            },
    
            {
                name: 'b'
            }, 
    
            {
                name: 'd'
            }
        ]);
    }
}

export { CreateUserController }


