import { render, screen } from '@testing-library/react'; 
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute />', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText('Ruta pública')).toBeTruthy()
        //screen.debug()
      
    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Benzini',
                id: 'ABC123'
            }
        }

        render(
             <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path='login' element= {<h1>Public route</h1>} />
                        </Route>
                        <Route path='/dc' element={<h1>Dc Page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Dc Page')).toBeTruthy();
    });
    
  
});
