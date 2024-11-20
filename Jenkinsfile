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
            if (isUnix()) {
                sh 'if [ -f index.html ]; then echo "index.html exists"; else echo "index.html does not exist" && exit 1; fi'
            } else {
                bat 'if exist index.html (echo index.html exists) else (echo index.html does not exist && exit /b 1)'
            }
        }
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
