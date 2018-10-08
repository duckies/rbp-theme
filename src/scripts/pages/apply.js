import {MDCRipple} from '@material/ripple';
import initializePage from '../global/global';
import {getWoWCharacters} from '../helpers/character';

/**
 * Handles error reporting for non-registered users.
 * @param {Node} element
 */
function handleRegistration(element) {
  const cannotSubmit = document.querySelector('.cannot-submit');
  const isntJoined = document.querySelector('.join-site');

  if (cannotSubmit) {
    if (isntJoined) {
      element.insertAdjacentHTML('beforeend',
      `<div class="register-warning">
        <div class="register-warning--info">
          <h2 class="application-info--header">Join our Website</h2>
          <p>You are logged in, but your account has to join our site before you can submit an application. <a href="" onclick="Enjin_Core.joinWebsiteRegular(event);return false;" rel="nofollow">Join our website.</a></p>
        </div>
       </div>`);
    } else {
      element.insertAdjacentHTML('beforeend',
      `<div class="register-warning">
        <div class="register-warning--info">
          <h2 class="application-info--header">Registration Required</h2>
          <p>You're required to <a href="/login/do/register'">register</a> or <a href="/login">login</a> to our website before you can view our application, for the sake of intergalactic plumbing, of course.<br><br>The email you use to register with will also be used to notify you of any updates to your application.</p>
        </div>
       </div>`);
    }
    const loaders = document.querySelectorAll('.register-warning__loader');
    loaders.forEach((loader) => MDCRipple.attachTo(loader));
  }
}

/**
 * Handles the fancy on-submission text.
 * @param {Node} element
 */
function styleSubmission(element) {
  element.insertAdjacentHTML('afterend',
    `<div class="submission-info">
      <h2 class="submission-info--header">Application Submitted</h2>
      <p>Thank you for spending the time to fill out our application. You may view your application <a href="/dashboard/applications/mine">here</a>.</p>
      <p><br>At the bottom of your application is a comment section where you may ask the status of your application, or reply to any comments or questions we may ask. Please be curtious and give us 24 hours before asking for an update.</p>
    </div>`);
}

/**
 * Watches for characters added to the application.
 * @param {Node} application
 */
function createCharacterMutationObserver(application) {
  const observer = new MutationObserver((mutations) => {
    if (application.classList.contains('m_appform')) {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.value == 'character') {
            getWoWCharacters();
          }
        });
      });
    }
  });

  observer.observe(application, {
    childList: true,
    subtree: true,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const formView = document.querySelector('.m_appform_view');
  const application = document.querySelector('.m_appform');

  initializePage();

  if (application) {
    createCharacterMutationObserver(application);
  }

  if (formView) {
    handleRegistration(formView);

    const submitted = formView.querySelector('.submitted');

    if (submitted) {
      styleSubmission(formView);
    }
  }
});

