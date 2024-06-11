import Input from '../form/input'; 
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o nome do projeto"
            />
          <Input 
                type="number" 
                text="Orçamento do Projeto" 
                name="orçamento" 
                placeholder="Insira valor total"
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;
