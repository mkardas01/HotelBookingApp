import mainPic from "/assets/front.png";
import { motion } from "framer-motion";
import AuthForm from "./AuthForm.jsx";
import {BackHome} from "./BackHome.jsx";

function AnimatedDiv({ Child }) {
    return (
        <>
            <motion.div
                className="flex flex-col justify-center items-center overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "fit-content"}}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
            >
                <Child />
            </motion.div>
        </>
    );
}

export default function Login_Register(props) {
    const { type } = props;

    return (
        <>
            <div className="flex h-screen">
                <motion.div style={{backgroundImage: `url(${mainPic})`, backgroundSize: 'cover', backgroundPosition: 'left', transformOrigin:"top"}}
                            className="w-1/2  h-full"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height:"100%"}}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                </motion.div>
                <div className="flex flex-col justify-center items-center px-8 text-center bg-gray-50 w-1/2 h-full ">
                    {type === "login" &&
                        <AnimatedDiv Child={() => AuthForm(
                            {
                                title: 'Zaloguj się do swojego konta', buttonText: 'Zaloguj się',
                                linkText: 'Nie masz konta?', linkPath: '/register'
                            })}
                        />
                    }
                    {type === "register" &&
                        <AnimatedDiv Child={() => AuthForm(
                            {
                                title: 'Utwórz własne konto',
                                passwordRepeatLabel: 'Powtórz hasło',
                                buttonText: 'Zarejestruj się',
                                linkText: 'Masz już konto?',
                                linkPath: '/login'
                            })}
                        />

                    }
                </div>
            </div>

            <BackHome />

        </>
    );
}