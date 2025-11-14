import { useCallback, useState, useEffect } from "react";
import { usePython } from "react-py";

interface PythonExecutor {
    code: string;
    setCode: (code: string) => void;
    result: string;
    run: () => Promise<void>;
    isLoading: boolean;
    isRunning: boolean;
}

export function usePythonExecutor(initialCode: string): PythonExecutor {
    const [code, setCode] = useState(initialCode);
    const [result, setResult] = useState<string>("");
    const { runPython, stdout, isLoading, isRunning } = usePython();

    const run = useCallback(async () => {
        setResult("Executando...");
        await runPython(code);
    }, [code, runPython]);

    useEffect(() => {
        if (!isRunning) {
            setResult(stdout || "");
        }
    }, [stdout, isRunning]);

    return {
        code,
        setCode,
        result,
        run,
        isLoading,
        isRunning,
    };
}
