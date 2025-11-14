"use client";

import { Editor } from "@monaco-editor/react";
import { Button } from "../ui/button";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from "../ui/card";

interface CodeComponentProps {
    code: string;
    setCode: (code: string) => void;
    result: string;
    onRun: () => void;
    isLoading: boolean;
    isRunning: boolean;
}

const CodeComponent: React.FC<CodeComponentProps> = ({
    code,
    setCode,
    result,
    onRun,
    isLoading,
    isRunning,
}) => {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Terminal de Comandos Python</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="mb-4">
            <label htmlFor="code-editor" className="text-sm font-medium leading-none">
              Escreva seu código Python aqui:
              <br />
              Obs: este simulador não suporta o comando input (pode colocar o valor da variável diretamente no código), é apenas uma forma rápida de testar um comando, recomendamos o uso de um google colab para isso!
            </label>

            <div>
              <Editor
                height="250px" 
                language="python"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value || "")}
                options={{
                  minimap: {enabled: false},
                  automaticLayout:true,
                  scrollbar: { useShadows: false },
                  wordWrap: "on",
                  quickSuggestions: false,
                  parameterHints: { enabled: false },
                  suggestOnTriggerCharacters: false,
                  acceptSuggestionOnEnter: 'off',
                  tabSize: 4, 
                }}
              />
            </div>
          </div>
          
          <Button 
            onClick={onRun} 
            disabled={isLoading || isRunning} 
            className="w-full"
          >
            {isLoading ? "Carregando Interpretador..." : isRunning ? "Executando..." : "Rodar Código"}
          </Button>

          <div className="mt-6 p-4 border rounded-md bg-gray-900">
            <p className="font-semibold mb-2 text-sm text-primary">Saída:</p>
            <pre className="text-sm text-white ">
              {result}
            </pre>
          </div>
        </CardContent>
      </Card>
    );
}

export default CodeComponent;