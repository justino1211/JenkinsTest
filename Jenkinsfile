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
        publishHTML(target: [
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report',
            keepAll: true,
            alwaysLinkToLastBuild: true,
            allowMissing: true
        ])

        archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
    }
}
}