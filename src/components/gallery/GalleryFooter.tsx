import { useState } from "react";

export const GalleryFooter = () => {

  return (
    <div className="footer">
      <div className="flex items-center justify-between px-4 py-4">
        <p>O melhor dos presentes é saber que posso compartilhar os melhores momentos com você.</p>
      </div>
      <div className="flex items-center justify-between px-4 py-4">
        <p>Desenvolvido com muito carinho e amor para o meu Amorzão Pequeno Meu ❤.</p>
      </div>

      <div className="flex items-center justify-between px-4 py-4">
        <div className="grid items-center justify-between px-4 py-4">
          <p>De: Ale</p>
          <p>Para: Luh</p>
        </div>
        <img src="https://github.com/WeAbacaX/IMaGine/blob/main/1-ComoTudoComecou/LogoAL.png?raw=true" alt="logo" className="h-11 w-auto" />
      </div>
    </div>
  );
};