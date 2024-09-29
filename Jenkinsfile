pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
		bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global --add safe.directory C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Portfolio_main'
		bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global user.email "kedar2206@outlook.com"'
                bat '"C:\\Program Files\\Git\\bin\\git.exe" config --global user.name "kedar-2206"'
		bat 'npm run deploy'
            }
        }
    }
}