🚚 Application de Gestion & Réservation de GP

🎯 Objectifs du Projet
Réserver des kilos disponibles chez un GP.
Sécuriser la réservation via un paiement en ligne.
Améliorer l’expérience client grâce à l’IA :
Prédire la disponibilité et la demande.
Recommander le meilleur GP (prix, proximité, fiabilité).
Anticiper les risques d’annulation/non-paiement.
Optimiser les prix de façon dynamique.

🛠️ Stack Utilisés

- Ionic
- Angular
- Gradle
- Docker 

```markdown
# Guide d'installation : Ionic, Angular, Gradle et Docker

Ce document décrit des méthodes recommandées pour installer Ionic, Angular, Gradle et Docker sur macOS, Windows et Linux (Ubuntu). Il suppose que tu as accès à un terminal et, pour Node.js/npm, qu'il est préférable d'utiliser nvm (Node Version Manager) afin de gérer proprement les versions de Node.

---

## 0) Pré-requis communs (Node.js & npm via nvm — recommandé)

Installer nvm (macOS / Linux) :
- macOS / Linux :
  - curl:
    curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  - Puis recharger le shell ou exécuter :
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

- Installer une version LTS de Node (ex. 18 LTS) :
  nvm install --lts
  nvm use --lts

- Vérifier :
  node --version
  npm --version

Windows : utiliser nvm-windows (https://github.com/coreybutler/nvm-windows) ou installer Node.js depuis https://nodejs.org/ et s'assurer que npm est disponible.

---

## 1) Ionic (CLI)

Ionic nécessite Node.js/npm. Installer le CLI globalement :

- Commande :
  npm install -g @ionic/cli

- Vérification :
  ionic --version

- Créer un projet sample :
  ionic start myApp blank --type=angular

Remarque : pour builder des applications mobiles (Android/iOS) tu auras besoin des SDKs (Android SDK, Xcode) et d'outils comme Cordova ou Capacitor (Capacitor est recommandé pour Ionic moderne).

---

## 2) Angular (CLI)

Angular CLI s'installe globalement via npm :

- Commande :
  npm install -g @angular/cli

- Vérification :
  ng version
  (ou) ng --version

- Créer un projet sample :
  ng new my-angular-app
  cd my-angular-app
  ng serve

- Accéder à l'app :
  Ouvrir http://localhost:4200

Remarque : si tu utilises Yarn, la commande équivalente est `yarn global add @angular/cli`.

---

## 3) Gradle

Il existe plusieurs méthodes. Voici deux approches recommandées.

Option A — SDKMAN (macOS / Linux) (recommandé) :
- Installer SDKMAN :
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"

- Installer Gradle :
  sdk install gradle

- Vérifier :
  gradle -v

Option B — APT (Ubuntu) :
- Installer (attention : version parfois plus ancienne) :
  sudo apt update
  sudo apt install gradle

- Vérifier :
  gradle -v

Windows :
- Utiliser Chocolatey :
  choco install gradle
  Puis redémarrer le terminal.
- Ou télécharger le ZIP depuis https://gradle.org/releases/ et configurer GRADLE_HOME + ajouter /bin au PATH.

Remarque : pour des projets Android, Gradle Wrapper (./gradlew) est recommandé pour garantir la version utilisée par le projet.

---

## 4) Docker

Linux (Ubuntu) — Docker Engine (méthode officielle) :
- Pré-requis et installation :
  sudo apt-get remove docker docker-engine docker.io containerd runc || true
  sudo apt-get update
  sudo apt-get install -y ca-certificates curl gnupg lsb-release
  sudo mkdir -p /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

- Post-install (optionnel, pour éviter sudo) :
  sudo groupadd docker || true
  sudo usermod -aG docker $USER
  # puis ouvrir une nouvelle session ou exécuter `newgrp docker`

- Vérification :
  docker --version
  docker compose version
  docker run --rm hello-world

macOS / Windows — Docker Desktop :
- Télécharger et installer Docker Desktop :
  https://www.docker.com/get-started
- Après installation, lancer Docker Desktop et suivre les instructions (peut requérir login Docker).
- Vérification dans un terminal :
  docker --version
  docker compose version
  docker run --rm hello-world

Remarque : Docker Desktop remplace l'installation manuelle de Docker Engine sur macOS/Windows et fournit une interface graphique et configuration d'hyperviseur.

---

## 5) Vérifications rapides (après toutes les installations)

- Ionic :
  ionic --version

- Angular :
  ng --version

- Gradle :
  gradle -v
  # ou ./gradlew -v si le projet a un wrapper

- Docker :
  docker --version
  docker compose version
  docker run --rm hello-world

---

## 6) Dépannage rapide

- Commande manquante : s'assurer que les binaires sont dans le PATH (redémarrer le terminal après modification).
- Permissions Docker : si `docker run` nécessite sudo, vérifier le groupe docker et que l'utilisateur est membre.
- Versions Node : si des problèmes de compatibilité, utiliser nvm pour changer la version Node.
- Gradle pour Android : préférer le gradle wrapper (`./gradlew`) fourni par le projet.

---

Si tu veux, je peux :
- Fournir un script d'installation automatisé pour Ubuntu.
- Rédiger une checklist pour configurer un poste de dev mobile (Android/iOS) complet pour Ionic.
- Te donner des instructions précises pour Windows (PowerShell) si tu es sur Windows.
```


Pour Lancer l'application :

On tape la commande : ionic serve