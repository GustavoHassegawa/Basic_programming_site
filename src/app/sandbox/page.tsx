import { PageTitleBlock } from "@/components/molecule/PageTitleBlock";
import PythonRunnerComponent from "@/components/python/pythonRunnerComponent";

const pageTitle = "Sandbox"
const pageSubtitile = "Execute seu código nesta página!"

export default function SandboxPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
            <PageTitleBlock
                title={pageTitle}
                subtitle={pageSubtitile}
            />
            <PythonRunnerComponent />
        </div>
    );
}