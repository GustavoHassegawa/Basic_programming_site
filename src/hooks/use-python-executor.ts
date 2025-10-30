import { useCallback, useEffect, useState } from "react";
import { usePython } from "react-py";

const CACHE_KEY = 'pythonCodeCache';
const IS_RELOADING_KEY = 'isReloading';

interface PythonExecutor {
    code: string;
    setCode: (code: string) => void;
    result: string;
    run: () => Promise<void>;
    isLoading: boolean;
    isRunning: boolean;
}

const loadCodeFromCache = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(CACHE_KEY);
    }
    return null;
};

export function usePythonExecutor(initialCode: string): PythonExecutor {
    const[code, setCodeState] = useState(initialCode);
    const [result, setResult] = useState<string>('');
    const { runPython, stdout, isLoading, isRunning} = usePython();

    useEffect(() => {
        const savedCode = loadCodeFromCache();
        if (savedCode !== null) {
        setCodeState(savedCode);
        }
    }, []);

    const setCode = useCallback((newCode: string) => {
        setCodeState(newCode);
        if (typeof window !== 'undefined') {
            localStorage.setItem(CACHE_KEY, newCode);
        }
    }, []);

    const run = useCallback(async () => {
        setResult("Executando...");
        await runPython(code);
    }, [code,runPython])

    useEffect(() => {
        if(!isRunning) {
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
    }
}