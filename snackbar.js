/**
 * Snackbar Component
 * A reusable snackbar/toast notification system
 * 
 * Usage:
 * - showSuccessSnackbar('Success message')
 * - showAlertSnackbar('Error message')
 * - showInfoSnackbar('Info message')
 * - showWarningSnackbar('Warning message')
 * - showCustomSnackbar('Custom message', 'custom-class', 'bi-icon-name')
 */

class SnackbarManager {
    constructor() {
        this.snackbarContainer = null;
        this.snackbarCount = 0;
        this.init();
    }

    init() {
        // Create container if it doesn't exist
        if (!document.getElementById('snackbar-container')) {
            this.snackbarContainer = document.createElement('div');
            this.snackbarContainer.id = 'snackbar-container';
            this.snackbarContainer.style.cssText = `
                position: fixed;
                top: 0px;
                right: 0px;
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(this.snackbarContainer);
        } else {
            this.snackbarContainer = document.getElementById('snackbar-container');
        }
    }

    createSnackbar(message, type, icon) {
        const snackbar = document.createElement('div');
        snackbar.className = `snackbar ${type}`;
        snackbar.style.cssText = `
            margin-bottom: 10px;
            pointer-events: auto;
            position: relative;
            top: 30px;
            right: 30px;
        `;
        
        snackbar.innerHTML = `
            <i class="bi ${icon}"></i>
            <span>${message}</span>
        `;

        return snackbar;
    }

    showSnackbar(message, type, icon, duration = 3000) {
        const snackbar = this.createSnackbar(message, type, icon);
        this.snackbarContainer.appendChild(snackbar);

        // Trigger show animation
        setTimeout(() => {
            snackbar.classList.add('show');
        }, 10);

        // Auto remove after duration
        setTimeout(() => {
            snackbar.classList.remove('show');
            setTimeout(() => {
                if (snackbar.parentNode) {
                    snackbar.parentNode.removeChild(snackbar);
                }
            }, 500);
        }, duration);
    }

    success(message, duration = 3000) {
        this.showSnackbar(message, 'success', 'bi-check-circle-fill', duration);
    }

    alert(message, duration = 3000) {
        this.showSnackbar(message, 'alert', 'bi-exclamation-triangle-fill', duration);
    }

    info(message, duration = 3000) {
        this.showSnackbar(message, 'info', 'bi-info-circle-fill', duration);
    }

    warning(message, duration = 3000) {
        this.showSnackbar(message, 'warning', 'bi-exclamation-triangle-fill', duration);
    }

    custom(message, type, icon, duration = 3000) {
        this.showSnackbar(message, type, icon, duration);
    }
}

// Initialize the snackbar manager
let snackbarManager;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    snackbarManager = new SnackbarManager();
});

// If DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        snackbarManager = new SnackbarManager();
    });
} else {
    snackbarManager = new SnackbarManager();
}

// Global functions for easy use
function showSuccessSnackbar(message, duration = 3000) {
    if (!snackbarManager) snackbarManager = new SnackbarManager();
    snackbarManager.success(message, duration);
}

function showAlertSnackbar(message, duration = 3000) {
    if (!snackbarManager) snackbarManager = new SnackbarManager();
    snackbarManager.alert(message, duration);
}

function showInfoSnackbar(message, duration = 3000) {
    if (!snackbarManager) snackbarManager = new SnackbarManager();
    snackbarManager.info(message, duration);
}

function showWarningSnackbar(message, duration = 3000) {
    if (!snackbarManager) snackbarManager = new SnackbarManager();
    snackbarManager.warning(message, duration);
}

function showCustomSnackbar(message, type, icon, duration = 3000) {
    if (!snackbarManager) snackbarManager = new SnackbarManager();
    snackbarManager.custom(message, type, icon, duration);
}

// Export for modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSuccessSnackbar,
        showAlertSnackbar,
        showInfoSnackbar,
        showWarningSnackbar,
        showCustomSnackbar,
        SnackbarManager
    };
} 