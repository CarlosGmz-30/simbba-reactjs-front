import React, { useState } from "react";
import { Button, Label, TextInput, ToggleSwitch } from "flowbite-react";
import '../assets/styles/Background.css'
import '../assets/styles/SignInPage.css'

function SignInPage() {
    const [switch1, setSwitch1] = useState(false);
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
                    >
                        <h1 id="title">Inicia sesión en SIBBAI</h1>
                        <div>
                            <div className="mb-2 block">
                                <Label className="formLabel" htmlFor="email1" value="Correo Electrónico:" style={{ color: 'white' }} />
                            </div>
                            <TextInput
                                className="inputForm"
                                id="email1"
                                type="email"
                                name="username"
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
                                required
                                placeholder="Contraseña"
                            />
                        </div>
                        <div id="rememberContainer" className="flex items-center gap-2">
                            <ToggleSwitch checked={switch1} onChange={setSwitch1} />
                            <Label id="rememberText" htmlFor="remember">Recuérdame</Label>
                        </div>
                        <Button
                            id="button"
                            type="submit"
                        >Iniciar Sesión
                        </Button>
                        <a id="forget" href="">¿Se te ha olvidado la contraseña?</a>
                    </form>
                </div>
                <div id="logoContainer">
                    <img id="logo" src="./src/images/logoSIMBBA-white.png" alt="" />
                </div>
            </div>

        </>
    );
}

export default SignInPage;  