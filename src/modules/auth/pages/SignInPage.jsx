import { Button, Label, TextInput, Spinner, ToggleSwitch } from "flowbite-react";
import AxiosClient from "../../../config/http-client/axios-client";
import AuthContext from "../../../config/context/auth-context";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { errorAlert } from "../../../config/alerts/alert";
import Logo from '../images/logoSIMBBA-white.png'

// Estilos de la página
import '../styles/SignInPage.css'
import '../styles/Background.css'


const SignInPage = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            mail: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            mail: yup.string().required('El correo es requerido').email('El correo no es válido'),
            password: yup.string().required('La contraseña es requerida')
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await AxiosClient({
                    url: "/auth/signin",
                    method: "POST",
                    data: values
                });
                //console.log(response);
                if (!response.error) {
                    dispatch({ type: "SIGNIN", payload: response.data })
                    navigate("/", { replace: true });
                } else throw Error("Error")
            } catch (error) {
                console.error(error);
                errorAlert();
            } finally {
                setSubmitting(false);
            }
        }
    });


    //ToggleSwitch
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prev) => !prev);
    };

    return (
        <>
            {/* Contenedor de objetos del background */}
            <div className="ripple-background">
                <div className="circle xxlarge shade1"></div>
                <div className="circle xlarge shade2"></div>
                <div className="circle large shade3"></div>
                <div className="circle medium shade4"></div>
                <div className="circle small shade5"></div>

                <div
                    id="circle-right"
                    className="circle-right xxlarge-right shade1"
                ></div>
                <div
                    id="circle-right"
                    className="circle-right xlarge-right shade2"
                ></div>
                <div
                    id="circle-right"
                    className="circle-right large-right shade3"
                ></div>
                <div
                    id="circle-right"
                    className="circle-right medium-right shade4"
                ></div>
                <div
                    id="circle-right"
                    className="circle-right small-right shade5"
                ></div>
            </div>

            {/* Contenedor general */}
            <div id="form-container">
                <div id="form-background">
                    <form
                        id="form"
                        className="flex max-w-md flex-col gap-4"
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 id="title">Inicia sesión en SIMBBA</h1>
                        <div>
                            <div className="mb-2 block">
                                <Label className="formLabel" htmlFor="email1" value="Correo Electrónico:" style={{ color: 'white' }} />
                            </div>
                            <TextInput
                                className="inputForm"
                                id="email1"
                                type="email"
                                name="mail"
                                value={formik.values.mail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.errors.mail && formik.touched.mail ?
                                        (<span className="text-red-500">{formik.errors.mail}</span>) : null
                                }
                                placeholder="Correo Electrónico"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className="formLabel" htmlFor="password1" value="Contraseña:" style={{ color: 'white' }} />
                            </div>
                            <TextInput
                                className="inputForm"
                                id="password1"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={
                                    formik.errors.password && formik.touched.password ?
                                        (<span className="text-red-500">{formik.errors.password}</span>) : null
                                }
                                required
                                placeholder="Contraseña"
                            />
                        </div>
                        <div id="rememberContainer" className="flex items-center gap-2">
                            <ToggleSwitch
                                checked={isOn}
                                onChange={handleToggle}
                                style={{
                                    "--slider-background-color-checked": "#ffffff",
                                    "--toggle-color-checked": "#ffffff",
                                    "--toggle-color-unchecked": "#ffffff",
                                }}
                            />
                            <Label id="rememberText" htmlFor="remember">Recuérdame</Label>
                        </div>
                        <Button id="button" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                            {
                                formik.isSubmitting ? (<Spinner />) : (<>

                                    Iniciar sesión
                                </>)
                            }
                        </Button>
                    </form>
                </div>
                <div id="logoContainer">
                    <img
                        id="logo"
                        src={Logo}
                        alt="SIMBBA" />
                </div>
            </div>

        </>
    );
}

export default SignInPage;  