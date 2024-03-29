import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import '../styles/ForgetPage.css'

function SignInPage() {
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
            <div id='form-container'>
                <div id='form-background'>
                    <form
                        id='form'
                        className='flex max-w-md flex-col gap-4'
                        noValidate
                    >
                        <h1 id='title'>Recuperar contraseña</h1>
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
                            <div id='messageContainer'>
                                <div id='messageMargin'>
                                    <div id='icon'>
                                        <img id='alertIcon' src="./src/images/alertIcon.png" alt="" />
                                    </div>
                                    <p id='message'>
                                        Se le hará llegar un correo con su contraseña a la
                                        cuenta que puso  en caso de  que se encuentre su cuenta
                                        en el sistema.
                                    </p>
                                </div>
                            </div>
                            <div id='buttonContainer'>
                                <Button
                                    id="button"
                                    type="submit"
                                >Recuperar Contraseña
                                </Button>
                            </div>
                        </div>
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