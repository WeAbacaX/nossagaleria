import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
// import { CloudImage } from "@/components/CloudImage/CloudImage";

const Login = () => {
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const FIXED_USER = "userlove";
  const FIXED_PASS = "11022025";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!endereco || !senha) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (endereco === FIXED_USER && senha === FIXED_PASS) {
      localStorage.setItem("logado", "true");
      toast({
        title: "Login realizado!",
        description: "Bem-vindo à Nossa Galeria",
      });
      navigate("/galeria");
    } else {
      toast({
        title: "Usuário ou senha inválidos!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gallery-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-gallery-card border-border shadow-elegant">

        {/* IMAGEM DO CLOUDINARY */}
        <div className="flex justify-center mb-6">
        <img src="https://res.cloudinary.com/dcep22u3p/image/upload/v1771523094/imgonline-com-ua-Negative-Vl1yYMIz0tF_kbwjc5.png" alt="logo" className="h-60 w-auto" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">IMaGine</h1>
          <p>Nosso Album de Momentos</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input
            type="text"
            placeholder="Usuário"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button type="submit" className="w-full bg-white text-black">
            Entrar
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
