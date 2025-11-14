"use client";

import React from "react";
import { usePythonExecutor } from "@/hooks/use-python-executor";
import CodeComponent from "./codeComponent";
import { PythonProvider } from "react-py";

const PythonRunnerLogic: React.FC = () => {
    const {code, setCode, result, run, isLoading, isRunning } = usePythonExecutor(
        "print('Olá, Mundo!')"
    );

    return (
        <CodeComponent
            code={code}
            setCode={setCode}
            result={result}
            onRun={run}
            isLoading={isLoading}
            isRunning={isRunning}
        />
    )
}

const PythonRunnerComponent: React.FC = () => {
    return (
        <PythonProvider
            packages={{
                official: [
                    "pyodide-http",
                    "numpy",
                    "pandas"
                ]
            }}
        >
            <PythonRunnerLogic />
        </PythonProvider>
    )
}

export default PythonRunnerComponent;