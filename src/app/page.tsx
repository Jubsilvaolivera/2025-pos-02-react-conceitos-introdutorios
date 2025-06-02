"use client";

import React, { useState } from "react";

const Titulo = () => <h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>;
const SubTitulo = () => <h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>;

function Cabecalho() {
    return (
        <div className="text-center">
            <Titulo />
            <SubTitulo />
        </div>
    );
}

interface TarefaProps {
    titulo: string;
    concluido?: boolean;
}

const Tarefa: React.FC<TarefaProps> = ({ titulo, concluido }) => {
    const [estaConcluido, setEstaConcluido] = useState(concluido);

    const escutarClique = () => {
        setEstaConcluido(!estaConcluido);
    };

    return (
        <div className={`p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
            estaConcluido ? "bg-gray-800 hover:border-gray-800" : "bg-gray-400 hover:border-gray-400"
        }`} onClick={escutarClique}>
            <h3 className="text-xl font-bold">{titulo}</h3>
            <p className="text-sm">{estaConcluido ? "Concluída" : "Pendente"}</p>
        </div>
    );
};

interface TarefasProps {
    dados: Array<TarefaProps>;
}

const Tarefas: React.FC<TarefasProps> = ({ dados }) => {
    return (
        <div>
            {dados.map((tarefa) => (
                <Tarefa key={tarefa.titulo} titulo={tarefa.titulo} concluido={tarefa.concluido} />
            ))}
        </div>
    );
};

const Home = () => {
    const tarefas = [
        { id: 1, titulo: "Estudar React", concluido: false },
        { id: 2, titulo: "Criar um projeto", concluido: true },
        { id: 3, titulo: "Aprender TypeScript", concluido: false },
    ];

    return (
        <div className="container mx-auto p-4">
            <Cabecalho />
            <Tarefas dados={tarefas} />
        </div>
    );
};

export default Home;