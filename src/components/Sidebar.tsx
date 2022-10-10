import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar(){
    return(
        <aside className={styles.Sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt=""
            />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/62613582?v=4"/>
                <strong>Erick</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}