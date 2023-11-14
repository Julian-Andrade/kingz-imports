import {
  MenuIcon,
  ShoppingCartIcon,
  MoveRight,
  Percent,
  Home,
  ListOrdered,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

export const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[2rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-3 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <MoveRight size={16} />
              Entrar
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Home size={16} />
              Página Inicial
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <Percent size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrdered size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">Andrade Store</h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};
