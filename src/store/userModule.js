import router from '@/router'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
export const userModule = {
    state: () => ({
        user_list: [],
        user: {
            id: '',
            name: '',
            gender: '',
            music_ganre: 'Не определился',
            mail: '',
            pass: '',
            check_pass: '',
            about: '',
        },
        user_input: {
            mail: '',
            pass: '',
            sign_in: false,
        },
    }),    
    mutations: {
        user_name(state, name) {
            state.user.name = name;
        },
        user_gender(state, gender) {
            state.user.gender = gender;
        },
        user_music_ganre(state, music_ganre) {
            state.user.music_ganre = music_ganre;
        },
        user_mail(state, mail) {
            state.user.mail = mail;
        },
        user_pass(state, pass) {
            state.user.pass = pass;
        },
        user_check_pass(state, check_pass) {
            state.user.check_pass = check_pass;
        },
        user_about(state, about) {
            state.user.about = about;
        },
        add_user(state) {
            if (state.user.mail == '') {
                alert('Введите e-mail')
            } else if (state.user.name == '') {
                alert('Введите имя которое будет отображаться на сайте')
            } else if (state.user.pass == '' || state.user.pass.length < 5) {
                alert('Введите пароль (больше шести символов)')
                state.user.pass = ''
                state.user.check_pass = ''
            } else if (state.user.pass !== state.user.check_pass) {
                alert('Повтор пароля не совпадает')
                state.user.pass = ''
                state.user.check_pass = ''
            } else {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, state.user.mail, state.user.pass)
                    .then(() => {
                        state.user.name = ''
                        state.user.gender = ''
                        state.user.music_ganre = 'Не определился'
                        state.user.mail = ''
                        state.user.pass = ''
                        state.user.check_pass = ''
                        state.user.about = ''
                        router.push({
                            name: 'ActionCompleted',
                            params: {
                                mesage: 'Регистрация прошла успешно',
                                btn_main: true,
                            }
                        })
                    })
                    .catch(() => {
                        router.push({
                            name: 'ActionCompleted',
                            params: {
                                mesage: 'Что-то пошло не так, попробуйте снова.',
                                btn_main: true,
                            }
                        })
                    });


            }
        },
        user_input_mail(state, mail) {
            state.user_input.mail = mail;
        },
        user_input_pass(state, pass) {
            state.user_input.pass = pass;
        },
        user_sign_in(state) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, state.user_input.mail, state.user_input.pass)
                .then(() => {
                    state.user_input.sign_in = true;
                    state.user_input.mail = '';
                    state.user_input.pass = '';                    
                })
        },
        user_sign_out(state) {
            const auth = getAuth();
            signOut(auth).then(() => {
                state.user_input.sign_in = false;
            })
        },
        true_sign_in (state) {
            state.user_input.sign_in = true;
        },
        false_sign_in (state) {
            state.user_input.sign_in = false;
        }
    },

}