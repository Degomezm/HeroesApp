import { render, screen } from "@testing-library/react"
import { AuthContext, LoginPage } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
            
        );
        //screen.debug();
        expect(screen.getAllByText('Login').length).toBe(2);
    })
    
    test('debe de moestrar el componente DC si está autenticado', () => {
      
        const contextValue = {
            logged: true,
            user: {
               id: '123456',
               name: 'Benzini' 
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getAllByText("DC").length).toBeGreaterThanOrEqual(1);
    });
    
});
