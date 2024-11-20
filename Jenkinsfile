pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Démarrage du build...'
            }
        }

        stage('Test') {
            steps {
                script {
                    def fileExists = fileExists('index.html')
                    if (fileExists) {
                        echo 'Le fichier index.html existe.'
                    } else {
                        error('Erreur : Le fichier index.html est manquant.')
                    }
                }
            }
        }
    }
}