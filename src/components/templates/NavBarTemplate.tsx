"use client";

import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuContent, 
  NavigationMenuTrigger, 
  NavigationMenuList 
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function NavBarTemplate() {
    return (
        <div className="NavigationMenu">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild >
                  <Link href="/fundamentos-computacao">Fundamentos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Comandos básicos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/comandos">
                          <div className="font-medium">Comandos</div>
                          <div className="text-muted-foreground">
                            Veja os comandos básicos em python.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                      
                      <NavigationMenuLink asChild>
                        <Link href="/comandos/print">
                          <div className="font-medium">Print</div>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link href="/comandos/input">   
                          <div className="font-medium">Input</div>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link href="/comandos/decisao">
                          <div className="font-medium">Decisões</div>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link href="/comandos/repeticao-loop">
                          <div className="font-medium">Repetições & Loops</div>
                        </Link>
                      </NavigationMenuLink>

                      <NavigationMenuLink asChild>
                        <Link href="/comandos/funcao">   
                          <div className="font-medium">Funções</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/tipos-de-dados">Tipos de Dados</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/sandbox">Sandbox</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/sobre-nos">Sobre nós</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>
    );
}