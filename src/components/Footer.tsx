import { Link } from "react-router-dom";
import ottonLogo from "@/assets/OttonLogo.png";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border/50 bg-card/30 py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img src={ottonLogo} alt="Otton Cristais" className="h-10 w-auto object-contain" />
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Pedras preciosas e cristais lapidados de excelência desde 2018.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/#" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link to="/loja" className="transition-colors hover:text-primary">Loja</Link></li>
              <li><Link to="/sobre" className="transition-colors hover:text-primary">Sobre</Link></li>
              <li><Link to="/contato" className="transition-colors hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Atendimento
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Fale Conosco</li>
              <li>Política de Trocas</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-foreground">
              Contato
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>contato@ottoncristais.com.br</li>
              <li>+55 (11) 9999-0000</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2026 Otton Cristais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
