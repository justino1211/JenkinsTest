pipeline {
    agent any

    triggers {
        cron('H/10 * * * *')
    }

    stages {
        stage('Check Folder') {
            steps {
                bat '''
                echo Current Jenkins workspace:
                cd
                dir
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                call npm install
                call npx playwright install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat '''
                call npx playwright test
                '''
            }
        }
    }

    post {
        always {
            echo 'Archiving Playwright results...'

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true

            echo 'Finished Jenkins Playwright run.'
        }
    }
}