import React from 'react'
import styles from './App.module.scss'

function App() {
  return (
    <>
      <div class="container">
        <h2>Gerador de Senha</h2>
        <form action="/" method="post">
            <div class="result-container">
                <span name="result"></span> 
                <button class="btn" id="clipboard">
                    <i class="far fa-clipboard"></i> 
                </button>
            </div>
            <div class="settings">
                <div class="setting">
                    <label>Comprimento da senha</label>
                    <input type="number" name="length" min="4" max="20" value="20" />
                </div>
                <div class="setting">
                    <label>Incluir letras maiúsculas</label>
                    <input type="checkbox" name="uppercase" checked />
                </div>
                <div class="setting">
                    <label>Incluir letras minúsculas</label>
                    <input type="checkbox" name="lowercase" checked />
                </div>
                <div class="setting">
                    <label>Incluir números</label>
                    <input type="checkbox" name="numbers" checked />
                </div>
                <div class="setting">
                    <label action="/" method="post">Incluir símbolos</label>
                    <input type="checkbox" name="symbols" checked />
                </div>
            </div>
            <button type="submit" class="btn btn-large" name="generate">Gerar senha</button>
        </form>
    </div>
    </>
  );
}

export default App;
