pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Compilation du projet...'
                
            }
        }


        stage('Test') {
    steps {
        script {
            def filExists = filExists('index.html')
            if (filExists){
                echo 'Le fichier index.html existe'
            }
            else{
                error('Ereur: le fichier n existe pas')
            }
    }
}
      
}
    }
}