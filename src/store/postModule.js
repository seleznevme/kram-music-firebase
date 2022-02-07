import router from '@/router'
export const postModule = {
    state: () => ({
        post_list: [],
        post: {
            id: '',
            title: '',
            body: '',
            image: require('@/views/news/img/news/news1.jpg'),
            like: 0,
            dislike: 0,
            add_like: false,
            add_dislike: false,
        },
        copy_post_edit: '',
    }),
    mutations: {
        post_title(state, title) {
            state.post.title = title;
        },
        post_body(state, body) {
            state.post.body = body;
        },
        add_post(state) {
            state.post.id = Date.now();
            state.post_list.push(Object.assign({}, state.post));
            state.post.title = '';
            state.post.body = '';
            router.push({ //router импортировал сдесь вверху отдельно
                name: 'ActionCompleted',
                params: {
                    mesage: 'Пост добавлен',
                    btn_main: true,
                    btn_rewiew: true,
                    id_post_rewiew: state.post.id,
                }
            })
        },
        dellete_post(state, id) {
            const answer = confirm('Вы действительно хотите удалить пост?')
            if (answer) {
                const index = state.post_list.findIndex(n => n.id == id);
                state.post_list.splice(index, 1);
                router.push({ //router импортировал сдесь вверху отдельно
                    name: 'ActionCompleted',
                    params: {
                        mesage: 'Пост удален',
                        btn_main: true,
                        btn_add: true,
                    }
                })
            }
        },
        copy_post_edit(state, id) {
            state.copy_post_edit = '';
            const index = state.post_list.findIndex(n => n.id == id);
            state.copy_post_edit = Object.assign({}, state.post_list[index]);
        },
        post_edit_title(state, title) {
            state.copy_post_edit.title = title;
        },
        post_edit_body(state, body) {
            state.copy_post_edit.body = body;
        },
        add_post_edit(state) {
            const answer = confirm('Вы действительно хотите изменить пост?')
            if (answer) {
                const index = state.post_list.findIndex(n => n.id == state.copy_post_edit.id);
                state.post_list.splice(index, 1, state.copy_post_edit);
                router.push({ //router импортировал сдесь вверху отдельно
                    name: 'ActionCompleted',
                    params: {
                        mesage: 'Пост изменен',
                        btn_main: true,
                        btn_rewiew: true,
                        id_post_rewiew: state.copy_post_edit.id,
                    }
                })
            }
        },
        cancel_post_edit(state) {
            const answer = confirm('Отменить изменения?')
            if (answer) {
                router.push({ //router импортировал сдесь вверху отдельно
                    name: 'ActionCompleted',
                    params: {
                        mesage: 'Изменения отменены',
                        btn_main: true,
                        btn_rewiew: true,
                        id_post_rewiew: state.copy_post_edit.id,
                    }
                })
            }
        },
        add_post_like(state, id) {
            const index = state.post_list.findIndex(n => n.id == id);
            if (state.post_list[index].add_like == false && state.post_list[index].add_dislike == false) {
                state.post_list[index].like += 1;
                state.post_list[index].add_like = true;
            } else if (state.post_list[index].add_like == true) {
                state.post_list[index].like -= 1;
                state.post_list[index].add_like = false;
            } else if (state.post_list[index].add_dislike == true) {
                state.post_list[index].like += 1;
                state.post_list[index].add_like = true;
                state.post_list[index].dislike -= 1;
                state.post_list[index].add_dislike = false;
            }
        },
        add_post_dislike(state, id) {
            const index = state.post_list.findIndex(n => n.id == id);
            if (state.post_list[index].add_dislike == false && state.post_list[index].add_like == false) {
                state.post_list[index].dislike += 1;
                state.post_list[index].add_dislike = true;
            } else if (state.post_list[index].add_dislike == true) {
                state.post_list[index].dislike -= 1;
                state.post_list[index].add_dislike = false;
            } else if (state.post_list[index].add_like == true) {
                state.post_list[index].dislike += 1;
                state.post_list[index].add_dislike = true;
                state.post_list[index].like -= 1;
                state.post_list[index].add_like = false;
            }
        },
        load_post(state, load) {
            state.post_list = load;
            state.post_list.splice(0, 1)                                   
            state.post_list.forEach(element => element['add_like'] = false)
            state.post_list.forEach(element => element['add_dislike'] = false)
        }

    },
}