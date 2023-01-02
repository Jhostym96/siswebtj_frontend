import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListUser, AddUser, EditUser } from '../Components/Usuarios'
import { AddControlTrabajo, ListControl, EditControl} from "../Components/ControlTrabajo";
import { MainLayout } from "../Layouts";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<ListUser />} />
                    <Route path="/agregarusuario" element={<AddUser />} />
                    <Route path="/edituser/:idusuario" element={<EditUser />} />

                    <Route path="/listcontrol" element={<ListControl />} />
                    <Route path="/agregarcontroltrabajo" element={<AddControlTrabajo />} />
                    <Route path="/editcontrol/:idcontrol" element={<EditControl />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;