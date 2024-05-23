"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import GithubLogo from "./assets/github.svg";
import LogoImg from "./assets/logo.svg";
import styles from "./styles/Home.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Roles ou tags semânticas dão significados, mas não necessriamente mudam o comportamento */}
      <header className={styles.header} role="banner" aria-label="Título">
        <Image src={LogoImg} width={286 / 2} alt="Rockseat blog" />
        <nav className={styles.nav}>
          <a
            href="https://github.com/ArthurPdaSilva?tab=repositories"
            aria-label="Acessando o github do dono do blog"
          >
            <Image src={GithubLogo} alt="Logo github" />
          </a>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          {/* Article anula header e footer, pq anula a semântica original do landmark */}
          <header>
            <h1>Desenvolvendo uma web acessível</h1>
            <h2>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
          </header>
          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>

          <h3>O que é acessibilidade, afinal?</h3>
        </article>
      </main>

      <footer className={styles.footer}>
        <Image src={LogoImg} width={286 / 2} alt="Rockseat blog" />
        <nav className={styles.nav} aria-label="Rodapé">
          <Dialog.Root>
            <Dialog.Trigger>Termos de uso</Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.backgroundModal} />
              <Dialog.Content className={styles.modal}>
                <Dialog.Title>Termos de uso:</Dialog.Title>
                <Dialog.Description>
                  Acessibilidade se tornou uma tendência no ecossistema
                  tecnológico mundial, diversas empresas passaram a adotar
                  critérios de desenvolvimento acessível em seus projetos — por
                  uma questão prática ou por exigências legais —, no entanto,
                  ainda faltam recursos e consciência do que de fato é inclusivo
                  na internet para pessoas com deficiências.
                </Dialog.Description>
                <Dialog.Close className={styles.closeModal}>
                  Fechar
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          {/* //Focus trap é uma técnica para manter o foco dentro de um modal */}
          {/* <button onClick={() => setIsOpen(true)}>Termos de uso</button> */}
        </nav>
      </footer>
      {/* <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </>
  );
}
