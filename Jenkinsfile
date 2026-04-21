pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Nehamahajan2438/todo-app-docker-jenkins-sonarqube.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker ps -q --filter "name=todo-app" | grep -q . && docker stop todo-app || true
                docker rm todo-app || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name todo-app todo-app'
            }
        }
    }
}