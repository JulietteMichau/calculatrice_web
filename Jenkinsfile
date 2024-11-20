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
                echo 'Exécution des tests...'               
            }
        }
      
       post {
        success {
            echo 'La build a réussi.'
        }
        failure {
            echo 'La build a échoué.'
        }
        always {
            echo 'Pipeline terminée.'
        }
    }
}
