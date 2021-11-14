exports.id = 309;
exports.ids = [309];
exports.modules = {
  /***/ 45740: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);

    var AuthStrings;
    (function (AuthStrings) {
      AuthStrings["BACK_TO_SIGN_IN"] = "Back to Sign In";
      AuthStrings["CHANGE_PASSWORD_ACTION"] = "Change";
      AuthStrings["CHANGE_PASSWORD"] = "Change Password";
      AuthStrings["CODE_LABEL"] = "Verification code";
      AuthStrings["CODE_PLACEHOLDER"] = "Enter code";
      AuthStrings["CONFIRM_SIGN_UP_CODE_LABEL"] = "Confirmation Code";
      AuthStrings["CONFIRM_SIGN_UP_CODE_PLACEHOLDER"] = "Enter your code";
      AuthStrings["CONFIRM_SIGN_UP_HEADER_TEXT"] = "Confirm Sign up";
      AuthStrings["CONFIRM_SIGN_UP_LOST_CODE"] = "Lost your code?";
      AuthStrings["CONFIRM_SIGN_UP_RESEND_CODE"] = "Resend Code";
      AuthStrings["CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Confirm";
      AuthStrings["CONFIRM_SMS_CODE"] = "Confirm SMS Code";
      AuthStrings["CONFIRM_TOTP_CODE"] = "Confirm TOTP Code";
      AuthStrings["CONFIRM"] = "Confirm";
      AuthStrings["CREATE_ACCOUNT_TEXT"] = "Create account";
      AuthStrings["EMAIL_LABEL"] = "Email Address *";
      AuthStrings["EMAIL_PLACEHOLDER"] = "Enter your email address";
      AuthStrings["FORGOT_PASSWORD_TEXT"] = "Forgot your password?";
      AuthStrings["LESS_THAN_TWO_MFA_VALUES_MESSAGE"] =
        "Less than two MFA types available";
      AuthStrings["NEW_PASSWORD_LABEL"] = "New password";
      AuthStrings["NEW_PASSWORD_PLACEHOLDER"] = "Enter your new password";
      AuthStrings["NO_ACCOUNT_TEXT"] = "No account?";
      AuthStrings["USERNAME_REMOVE_WHITESPACE"] =
        "Username cannot contain whitespace";
      AuthStrings["PASSWORD_REMOVE_WHITESPACE"] =
        "Password cannot start or end with whitespace";
      AuthStrings["PASSWORD_LABEL"] = "Password *";
      AuthStrings["PASSWORD_PLACEHOLDER"] = "Enter your password";
      AuthStrings["PHONE_LABEL"] = "Phone Number *";
      AuthStrings["PHONE_PLACEHOLDER"] = "(555) 555-1212";
      AuthStrings["QR_CODE_ALT"] = "qrcode";
      AuthStrings["RESET_PASSWORD_TEXT"] = "Reset password";
      AuthStrings["RESET_YOUR_PASSWORD"] = "Reset your password";
      AuthStrings["SELECT_MFA_TYPE_HEADER_TEXT"] = "Select MFA Type";
      AuthStrings["SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT"] = "Verify";
      AuthStrings["SEND_CODE"] = "Send Code";
      AuthStrings["SUBMIT"] = "Submit";
      AuthStrings["SETUP_TOTP_REQUIRED"] = "TOTP needs to be configured";
      AuthStrings["SIGN_IN_ACTION"] = "Sign In";
      AuthStrings["SIGN_IN_HEADER_TEXT"] = "Sign in to your account";
      AuthStrings["SIGN_IN_TEXT"] = "Sign in";
      AuthStrings["SIGN_IN_WITH_AMAZON"] = "Sign in with Amazon";
      AuthStrings["SIGN_IN_WITH_AUTH0"] = "Sign in with Auth0";
      AuthStrings["SIGN_IN_WITH_AWS"] = "Sign in with AWS";
      AuthStrings["SIGN_IN_WITH_FACEBOOK"] = "Sign in with Facebook";
      AuthStrings["SIGN_IN_WITH_GOOGLE"] = "Sign in with Google";
      AuthStrings["SIGN_OUT"] = "Sign Out";
      AuthStrings["SIGN_UP_EMAIL_PLACEHOLDER"] = "Email";
      AuthStrings["SIGN_UP_HAVE_ACCOUNT_TEXT"] = "Have an account?";
      AuthStrings["SIGN_UP_HEADER_TEXT"] = "Create a new account";
      AuthStrings["SIGN_UP_PASSWORD_PLACEHOLDER"] = "Password";
      AuthStrings["SIGN_UP_SUBMIT_BUTTON_TEXT"] = "Create Account";
      AuthStrings["SIGN_UP_USERNAME_PLACEHOLDER"] = "Username";
      AuthStrings["SKIP"] = "Skip";
      AuthStrings["SUCCESS_MFA_TYPE"] = "Success! Your MFA Type is now:";
      AuthStrings["TOTP_HEADER_TEXT"] = "Scan then enter verification code";
      AuthStrings["TOTP_LABEL"] = "Enter Security Code:";
      AuthStrings["TOTP_ISSUER"] = "AWSCognito";
      AuthStrings["TOTP_SETUP_FAILURE"] = "TOTP Setup has failed";
      AuthStrings["TOTP_SUBMIT_BUTTON_TEXT"] = "Verify Security Token";
      AuthStrings["TOTP_SUCCESS_MESSAGE"] = "Setup TOTP successfully!";
      AuthStrings["UNABLE_TO_SETUP_MFA_AT_THIS_TIME"] =
        "Failed! Unable to configure MFA at this time";
      AuthStrings["USERNAME_LABEL"] = "Username *";
      AuthStrings["USERNAME_PLACEHOLDER"] = "Enter your username";
      AuthStrings["VERIFY_CONTACT_EMAIL_LABEL"] = "Email";
      AuthStrings["VERIFY_CONTACT_HEADER_TEXT"] =
        "Account recovery requires verified contact information";
      AuthStrings["VERIFY_CONTACT_PHONE_LABEL"] = "Phone Number";
      AuthStrings["VERIFY_CONTACT_SUBMIT_LABEL"] = "Submit";
      AuthStrings["VERIFY_CONTACT_VERIFY_LABEL"] = "Verify";
      AuthStrings["ADDRESS_LABEL"] = "Address";
      AuthStrings["ADDRESS_PLACEHOLDER"] = "Enter your address";
      AuthStrings["NICKNAME_LABEL"] = "Nickname";
      AuthStrings["NICKNAME_PLACEHOLDER"] = "Enter your nickname";
      AuthStrings["BIRTHDATE_LABEL"] = "Birthday";
      AuthStrings["BIRTHDATE_PLACEHOLDER"] = "Enter your birthday";
      AuthStrings["PICTURE_LABEL"] = "Picture URL";
      AuthStrings["PICTURE_PLACEHOLDER"] = "Enter your picture URL";
      AuthStrings["FAMILY_NAME_LABEL"] = "Family Name";
      AuthStrings["FAMILY_NAME_PLACEHOLDER"] = "Enter your family name";
      AuthStrings["PREFERRED_USERNAME_LABEL"] = "Preferred Username";
      AuthStrings["PREFERRED_USERNAME_PLACEHOLDER"] =
        "Enter your preferred username";
      AuthStrings["GENDER_LABEL"] = "Gender";
      AuthStrings["GENDER_PLACEHOLDER"] = "Enter your gender";
      AuthStrings["PROFILE_LABEL"] = "Profile URL";
      AuthStrings["PROFILE_PLACEHOLDER"] = "Enter your profile URL";
      AuthStrings["GIVEN_NAME_LABEL"] = "First Name";
      AuthStrings["GIVEN_NAME_PLACEHOLDER"] = "Enter your first name";
      AuthStrings["ZONEINFO_LABEL"] = "Time zone";
      AuthStrings["ZONEINFO_PLACEHOLDER"] = "Enter your time zone";
      AuthStrings["LOCALE_LABEL"] = "Locale";
      AuthStrings["LOCALE_PLACEHOLDER"] = "Enter your locale";
      AuthStrings["UPDATED_AT_LABEL"] = "Updated At";
      AuthStrings["UPDATED_AT_PLACEHOLDER"] =
        "Enter the time the information was last updated";
      AuthStrings["MIDDLE_NAME_LABEL"] = "Middle Name";
      AuthStrings["MIDDLE_NAME_PLACEHOLDER"] = "Enter your middle name";
      AuthStrings["WEBSITE_LABEL"] = "Website";
      AuthStrings["WEBSITE_PLACEHOLDER"] = "Enter your website";
      AuthStrings["NAME_LABEL"] = "Full Name";
      AuthStrings["NAME_PLACEHOLDER"] = "Enter your full name";
      AuthStrings["PHOTO_PICKER_TITLE"] = "Picker Title";
      AuthStrings["PHOTO_PICKER_HINT"] =
        "Ancillary text or content may occupy this space here";
      AuthStrings["PHOTO_PICKER_PLACEHOLDER_HINT"] = "Placeholder hint";
      AuthStrings["PHOTO_PICKER_BUTTON_TEXT"] = "Button";
      AuthStrings["IMAGE_PICKER_TITLE"] = "Add Profile Photo";
      AuthStrings["IMAGE_PICKER_HINT"] = "Preview the image before upload";
      AuthStrings["IMAGE_PICKER_PLACEHOLDER_HINT"] = "Tap to image select";
      AuthStrings["IMAGE_PICKER_BUTTON_TEXT"] = "Upload";
      AuthStrings["PICKER_TEXT"] = "Pick a file";
      AuthStrings["TEXT_FALLBACK_CONTENT"] = "Fallback Content";
      AuthStrings["CONFIRM_SIGN_UP_FAILED"] = "Confirm Sign Up Failed";
      AuthStrings["SIGN_UP_FAILED"] = "Sign Up Failed";
    })(AuthStrings || (AuthStrings = {}));
    var InteractionsStrings;
    (function (InteractionsStrings) {
      InteractionsStrings["CHATBOT_TITLE"] = "ChatBot Lex";
      InteractionsStrings["TEXT_INPUT_PLACEHOLDER"] = "Write a message";
      InteractionsStrings["VOICE_INPUT_PLACEHOLDER"] = "Click mic to speak";
      InteractionsStrings["CHAT_DISABLED_ERROR"] =
        "Error: Either voice or text must be enabled for the chatbot";
      InteractionsStrings["NO_BOT_NAME_ERROR"] =
        "Error: Bot name must be provided to ChatBot";
    })(InteractionsStrings || (InteractionsStrings = {}));
    const Translations = Object.assign(
      Object.assign(Object.assign({}, AuthStrings), Auth.AuthErrorStrings),
      InteractionsStrings
    );

    exports.Translations = Translations;

    /***/
  },

  /***/ 82096: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    const logger = new core.ConsoleLogger("amplify-amazon-button");
    const AmplifyAmazonButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.federatedSignIn = (response) => {
          const { access_token, expires_in } = response;
          if (!access_token) {
            return;
          }
          if (
            !Auth.Auth ||
            typeof Auth.Auth.federatedSignIn !== "function" ||
            typeof Auth.Auth.currentAuthenticatedUser !== "function"
          ) {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
          }
          const date = new Date();
          const expires_at = expires_in * 1000 + date.getTime();
          window["amazon"].Login.retrieveProfile(async (userInfo) => {
            if (!userInfo.success) {
              return logger.debug("Get user Info failed");
            }
            const user = {
              name: userInfo.profile.Name,
              email: userInfo.profile.PrimaryEmail,
            };
            await Auth.Auth.federatedSignIn(
              "amazon",
              { token: access_token, expires_at },
              user
            );
            const authenticatedUser =
              await Auth.Auth.currentAuthenticatedUser();
            this.handleAuthStateChange(
              authTypes.AuthState.SignedIn,
              authenticatedUser
            );
          });
        };
      }
      /**
       * @see https://developer.amazon.com/docs/login-with-amazon/install-sdk-javascript.html
       */
      signInWithAmazon(event) {
        event.preventDefault();
        window["amazon"].Login.setClientId(this.clientId);
        window["amazon"].Login.authorize({ scope: "profile" }, (response) => {
          if (response.error) {
            return logger.debug(
              "Failed to login with amazon: " + response.error
            );
          }
          try {
            window.localStorage.setItem(
              constants.AUTH_SOURCE_KEY,
              JSON.stringify({ provider: "amazon" })
            );
          } catch (e) {
            logger.debug("Failed to cache auth source into localStorage", e);
          }
          this.federatedSignIn(response);
        });
      }
      render() {
        return index.h(
          "amplify-sign-in-button",
          {
            onClick: (event) => this.signInWithAmazon(event),
            provider: "amazon",
          },
          index.h("script", {
            src: "https://assets.loginwithamazon.com/sdk/na/login1.js",
          }),
          core.I18n.get(Translations.Translations.SIGN_IN_WITH_AMAZON)
        );
      }
    };

    const logger$1 = new core.ConsoleLogger("amplify-auth0-button");
    const AmplifyAuth0Button = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.handleLoad = () => {
          // @ts-ignore Property 'auth0' does not exist on type '{}'.
          const { oauth = {} } = Auth.Auth.configure();
          // @ts-ignore Property 'auth0' does not exist on type '{}'.
          const { config = oauth.auth0 } = this;
          if (!config) {
            logger$1.debug("Auth0 is not configured");
            return;
          }
          logger$1.debug("auth0 configuration", config);
          if (!this._auth0) {
            this._auth0 = new window["auth0"].WebAuth(config);
          }
          this._auth0.parseHash((err, authResult) => {
            if (err) {
              logger$1.debug("Failed to parse the url for Auth0", err);
              return;
            }
            if (!authResult) {
              logger$1.debug("Auth0 found no authResult in hash");
              return;
            }
            const payload = {
              provider: "auth0",
              opts: {
                returnTo: config.returnTo,
                clientID: config.clientID,
                federated: config.federated,
              },
            };
            try {
              localStorage.setItem(
                constants.AUTH_SOURCE_KEY,
                JSON.stringify(payload)
              );
            } catch (e) {
              logger$1.debug(
                "Failed to cache auth source into localStorage",
                e
              );
            }
            this._auth0.client.userInfo(
              authResult.accessToken,
              async (err, user) => {
                let username = undefined;
                let email = undefined;
                if (err) {
                  logger$1.debug("Failed to get the user info", err);
                } else {
                  username = user.name;
                  email = user.email;
                }
                await Auth.Auth.federatedSignIn(
                  config.domain,
                  {
                    token: authResult.idToken,
                    expires_at:
                      authResult.expiresIn * 1000 + new Date().getTime(),
                  },
                  { name: username, email }
                );
                const authenticatedUser =
                  await Auth.Auth.currentAuthenticatedUser();
                this.handleAuthStateChange(
                  authTypes.AuthState.SignedIn,
                  authenticatedUser
                );
              }
            );
          });
        };
      }
      signInWithAuth0(event) {
        event.preventDefault();
        if (!this._auth0) {
          throw new Error("the auth0 client is not configured");
        }
        this._auth0.authorize();
      }
      render() {
        return index.h(
          "amplify-sign-in-button",
          {
            onClick: (event) => this.signInWithAuth0(event),
            provider: "auth0",
          },
          index.h("script", {
            onLoad: this.handleLoad,
            src: "https://cdn.auth0.com/js/auth0/9.11/auth0.min.js",
          }),
          core.I18n.get(Translations.Translations.SIGN_IN_WITH_AUTH0)
        );
      }
    };

    const logger$2 = new core.ConsoleLogger("amplify-facebook-button");
    const AmplifyFacebookButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.federatedSignIn = (authResponse) => {
          const { accessToken, expiresIn } = authResponse;
          if (!accessToken) {
            return;
          }
          if (
            !Auth.Auth ||
            typeof Auth.Auth.federatedSignIn !== "function" ||
            typeof Auth.Auth.currentAuthenticatedUser !== "function"
          ) {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
          }
          const date = new Date();
          const expires_at = expiresIn * 1000 + date.getTime();
          const fields = "name,email";
          window["FB"].api("/me", { fields }, async (response) => {
            const user = {
              name: response.name,
              email: response.email,
            };
            await Auth.Auth.federatedSignIn(
              "facebook",
              { token: accessToken, expires_at },
              user
            );
            const authenticatedUser =
              await Auth.Auth.currentAuthenticatedUser();
            this.handleAuthStateChange(
              authTypes.AuthState.SignedIn,
              authenticatedUser
            );
          });
        };
        this.getLoginStatus = () => {
          window["FB"].getLoginStatus((response) => {
            try {
              window.localStorage.setItem(
                constants.AUTH_SOURCE_KEY,
                JSON.stringify({ provider: "facebook" })
              );
            } catch (e) {
              logger$2.debug(
                "Failed to cache auth source into localStorage",
                e
              );
            }
            if (response.status === "connected") {
              return this.federatedSignIn(response.authResponse);
            }
            this.login();
          });
        };
        this.login = () => {
          const scope = "public_profile,email";
          window["FB"].login(
            (response) => {
              if (response && response.authResponse) {
                this.federatedSignIn(response.authResponse);
              }
            },
            { scope }
          );
        };
      }
      /**
       * @see https://developers.facebook.com/docs/javascript/reference/FB.init/v5.0
       */
      signInWithFacebook(event) {
        event.preventDefault();
        window["FB"].init({
          appId: this.appId,
          cookie: true,
          xfbml: false,
          version: "v5.0",
        });
        this.getLoginStatus();
      }
      render() {
        return index.h(
          "amplify-sign-in-button",
          {
            onClick: (event) => this.signInWithFacebook(event),
            provider: "facebook",
          },
          index.h("script", {
            async: true,
            defer: true,
            src: "https://connect.facebook.net/en_US/sdk.js",
          }),
          core.I18n.get(Translations.Translations.SIGN_IN_WITH_FACEBOOK)
        );
      }
    };

    const logger$3 = new core.ConsoleLogger("amplify-google-button");
    const AmplifyGoogleButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.handleError = (error) => {
          console.error(error);
        };
        /**
         * @see https://developers.google.com/identity/sign-in/web/build-button#building_a_button_with_a_custom_graphic
         */
        this.handleLoad = () => {
          window["gapi"].load("auth2");
        };
        this.handleUser = async (user) => {
          if (
            !Auth.Auth ||
            typeof Auth.Auth.federatedSignIn !== "function" ||
            typeof Auth.Auth.currentAuthenticatedUser !== "function"
          ) {
            throw new Error(constants.NO_AUTH_MODULE_FOUND);
          }
          try {
            window.localStorage.setItem(
              constants.AUTH_SOURCE_KEY,
              JSON.stringify({ provider: "google" })
            );
          } catch (e) {
            logger$3.debug("Failed to cache auth source into localStorage", e);
          }
          const { id_token, expires_at } = user.getAuthResponse();
          const profile = user.getBasicProfile();
          await Auth.Auth.federatedSignIn(
            "google",
            { token: id_token, expires_at },
            {
              email: profile.getEmail(),
              name: profile.getName(),
              picture: profile.getImageUrl(),
            }
          );
          const authenticatedUser = await Auth.Auth.currentAuthenticatedUser();
          try {
            this.handleAuthStateChange(
              authTypes.AuthState.SignedIn,
              authenticatedUser
            );
          } catch (error) {
            this.handleError(error);
          }
        };
      }
      getAuthInstance() {
        if (window["gapi"] && window["gapi"].auth2) {
          return (
            window["gapi"].auth2.getAuthInstance() ||
            window["gapi"].auth2.init({
              client_id: this.clientId,
              cookiepolicy: "single_host_origin",
              scope: "profile email openid",
            })
          );
        }
        return null;
      }
      signInWithGoogle(event) {
        event.preventDefault();
        this.getAuthInstance()
          .signIn()
          .then(this.handleUser)
          .catch(this.handleError);
      }
      render() {
        return index.h(
          "amplify-sign-in-button",
          {
            onClick: (event) => this.signInWithGoogle(event),
            provider: "google",
          },
          index.h("script", {
            onLoad: this.handleLoad,
            src: "https://apis.google.com/js/api:client.js",
          }),
          core.I18n.get(Translations.Translations.SIGN_IN_WITH_GOOGLE)
        );
      }
    };

    const AmplifyOAuthButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Federated credentials & configuration. */
        this.config = {};
      }
      signInWithOAuth(event) {
        event.preventDefault();
        Auth.Auth.federatedSignIn();
      }
      render() {
        return index.h(
          "amplify-sign-in-button",
          {
            onClick: (event) => this.signInWithOAuth(event),
            provider: "oauth",
          },
          this.config.label ||
            core.I18n.get(Translations.Translations.SIGN_IN_WITH_AWS)
        );
      }
    };

    exports.amplify_amazon_button = AmplifyAmazonButton;
    exports.amplify_auth0_button = AmplifyAuth0Button;
    exports.amplify_facebook_button = AmplifyFacebookButton;
    exports.amplify_google_button = AmplifyGoogleButton;
    exports.amplify_oauth_button = AmplifyOAuthButton;

    /***/
  },

  /***/ 8145: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const AmplifyAuthContainer = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "form",
            { autoComplete: "on", hidden: true },
            index.h("input", { name: "username" }),
            index.h("input", { name: "password", type: "password" }),
            index.h("input", { type: "submit" })
          ),
          index.h("slot", null)
        );
      }
    };

    exports.amplify_auth_container = AmplifyAuthContainer;

    /***/
  },

  /***/ 86247: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);

    const componentFieldMapping = {
      username: (ff) =>
        index.h("amplify-username-field", {
          label: ff.label,
          placeholder: ff.placeholder,
          required: ff.required,
          handleInputChange: ff.handleInputChange,
          value: ff.value,
          inputProps: ff.inputProps,
          disabled: ff.disabled,
          hint: ff.hint,
        }),
      password: (ff) =>
        index.h("amplify-password-field", {
          label: ff.label,
          placeholder: ff.placeholder,
          hint: ff.hint,
          required: ff.required,
          handleInputChange: ff.handleInputChange,
          value: ff.value,
          inputProps: ff.inputProps,
          disabled: ff.disabled,
        }),
      email: (ff) =>
        index.h("amplify-email-field", {
          label: ff.label,
          placeholder: ff.placeholder,
          required: ff.required,
          handleInputChange: ff.handleInputChange,
          value: ff.value,
          inputProps: ff.inputProps,
          disabled: ff.disabled,
          hint: ff.hint,
        }),
      code: (ff) =>
        index.h("amplify-code-field", {
          label: ff.label,
          placeholder: ff.placeholder,
          hint: ff.hint,
          required: ff.required,
          handleInputChange: ff.handleInputChange,
          value: ff.value,
          inputProps: Object.assign(Object.assign({}, ff.inputProps), {
            min: "0",
          }),
          disabled: ff.disabled,
        }),
      // TODO: Will create a phone field component once the dial country code component is in
      phone_number: (ff) =>
        index.h("amplify-phone-field", {
          label: ff.label,
          placeholder: ff.placeholder,
          required: ff.required,
          handleInputChange: ff.handleInputChange,
          value: ff.value,
          inputProps: ff.inputProps,
          disabled: ff.disabled,
          dialCode: ff.dialCode,
          hint: ff.hint,
        }),
      default: (ff) =>
        index.h("amplify-form-field", {
          label: ff.label,
          type: ff.type,
          placeholder: ff.placeholder,
          required: ff.required,
          handleInputChange: ff.handleInputChange,
          value: ff.value,
          inputProps: ff.inputProps,
          disabled: ff.disabled,
          hint: ff.hint,
        }),
    };

    const amplifyAuthFieldsCss = ".auth-fields{margin-bottom:2rem}";

    const AmplifyAuthFields = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined) return "";
        formFields.forEach((formField) => {
          if (typeof formField === "string") {
            content.push(componentFieldMapping[formField](formField));
          } else if (
            Object.keys(componentFieldMapping).includes(formField.type)
          ) {
            content.push(componentFieldMapping[formField.type](formField));
          } else {
            content.push(componentFieldMapping["default"](formField));
          }
        });
        return content;
      }
      render() {
        return index.h(
          "div",
          { class: "auth-fields" },
          this.constructFormFieldOptions(this.formFields)
        );
      }
    };
    AmplifyAuthFields.style = amplifyAuthFieldsCss;

    const AmplifyCodeField = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.CODE_SUFFIX;
        /** Used for the code label */
        this.label = Translations.Translations.CODE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.CODE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
      }
      render() {
        return index.h("amplify-form-field", {
          fieldId: this.fieldId,
          label: core.I18n.get(this.label),
          placeholder: core.I18n.get(this.placeholder),
          type: "number",
          hint: this.hint,
          required: this.required,
          handleInputChange: this.handleInputChange,
          value: this.value,
          inputProps: this.inputProps,
          disabled: this.disabled,
        });
      }
    };

    const countryDialCodes = [
      { label: "+1", value: "+1" },
      { label: "+7", value: "+7" },
      { label: "+20", value: "+20" },
      { label: "+27", value: "+27" },
      { label: "+30", value: "+30" },
      { label: "+31", value: "+31" },
      { label: "+32", value: "+32" },
      { label: "+33", value: "+33" },
      { label: "+34", value: "+34" },
      { label: "+36", value: "+36" },
      { label: "+39", value: "+39" },
      { label: "+40", value: "+40" },
      { label: "+41", value: "+41" },
      { label: "+43", value: "+43" },
      { label: "+44", value: "+44" },
      { label: "+45", value: "+45" },
      { label: "+46", value: "+46" },
      { label: "+47", value: "+47" },
      { label: "+48", value: "+48" },
      { label: "+49", value: "+49" },
      { label: "+51", value: "+51" },
      { label: "+52", value: "+52" },
      { label: "+53", value: "+53" },
      { label: "+54", value: "+54" },
      { label: "+55", value: "+55" },
      { label: "+56", value: "+56" },
      { label: "+57", value: "+57" },
      { label: "+58", value: "+58" },
      { label: "+60", value: "+60" },
      { label: "+61", value: "+61" },
      { label: "+62", value: "+62" },
      { label: "+63", value: "+63" },
      { label: "+64", value: "+64" },
      { label: "+65", value: "+65" },
      { label: "+66", value: "+66" },
      { label: "+81", value: "+81" },
      { label: "+82", value: "+82" },
      { label: "+84", value: "+84" },
      { label: "+86", value: "+86" },
      { label: "+90", value: "+90" },
      { label: "+91", value: "+91" },
      { label: "+92", value: "+92" },
      { label: "+93", value: "+93" },
      { label: "+94", value: "+94" },
      { label: "+95", value: "+95" },
      { label: "+98", value: "+98" },
      { label: "+212", value: "+212" },
      { label: "+213", value: "+213" },
      { label: "+216", value: "+216" },
      { label: "+218", value: "+218" },
      { label: "+220", value: "+220" },
      { label: "+221", value: "+221" },
      { label: "+222", value: "+222" },
      { label: "+223", value: "+223" },
      { label: "+224", value: "+224" },
      { label: "+225", value: "+225" },
      { label: "+226", value: "+226" },
      { label: "+227", value: "+227" },
      { label: "+228", value: "+228" },
      { label: "+229", value: "+229" },
      { label: "+230", value: "+230" },
      { label: "+231", value: "+231" },
      { label: "+232", value: "+232" },
      { label: "+233", value: "+233" },
      { label: "+234", value: "+234" },
      { label: "+235", value: "+235" },
      { label: "+236", value: "+236" },
      { label: "+237", value: "+237" },
      { label: "+238", value: "+238" },
      { label: "+239", value: "+239" },
      { label: "+240", value: "+240" },
      { label: "+241", value: "+241" },
      { label: "+242", value: "+242" },
      { label: "+243", value: "+243" },
      { label: "+244", value: "+244" },
      { label: "+245", value: "+245" },
      { label: "+246", value: "+246" },
      { label: "+248", value: "+248" },
      { label: "+249", value: "+249" },
      { label: "+250", value: "+250" },
      { label: "+251", value: "+251" },
      { label: "+252", value: "+252" },
      { label: "+253", value: "+253" },
      { label: "+254", value: "+254" },
      { label: "+255", value: "+255" },
      { label: "+256", value: "+256" },
      { label: "+257", value: "+257" },
      { label: "+258", value: "+258" },
      { label: "+260", value: "+260" },
      { label: "+261", value: "+261" },
      { label: "+262", value: "+262" },
      { label: "+263", value: "+263" },
      { label: "+264", value: "+264" },
      { label: "+265", value: "+265" },
      { label: "+266", value: "+266" },
      { label: "+267", value: "+267" },
      { label: "+268", value: "+268" },
      { label: "+269", value: "+269" },
      { label: "+290", value: "+290" },
      { label: "+291", value: "+291" },
      { label: "+297", value: "+297" },
      { label: "+298", value: "+298" },
      { label: "+299", value: "+299" },
      { label: "+345", value: "+345" },
      { label: "+350", value: "+350" },
      { label: "+351", value: "+351" },
      { label: "+352", value: "+352" },
      { label: "+353", value: "+353" },
      { label: "+354", value: "+354" },
      { label: "+355", value: "+355" },
      { label: "+356", value: "+356" },
      { label: "+357", value: "+357" },
      { label: "+358", value: "+358" },
      { label: "+359", value: "+359" },
      { label: "+370", value: "+370" },
      { label: "+371", value: "+371" },
      { label: "+372", value: "+372" },
      { label: "+373", value: "+373" },
      { label: "+374", value: "+374" },
      { label: "+375", value: "+375" },
      { label: "+376", value: "+376" },
      { label: "+377", value: "+377" },
      { label: "+378", value: "+378" },
      { label: "+379", value: "+379" },
      { label: "+380", value: "+380" },
      { label: "+381", value: "+381" },
      { label: "+382", value: "+382" },
      { label: "+385", value: "+385" },
      { label: "+386", value: "+386" },
      { label: "+387", value: "+387" },
      { label: "+389", value: "+389" },
      { label: "+420", value: "+420" },
      { label: "+421", value: "+421" },
      { label: "+423", value: "+423" },
      { label: "+500", value: "+500" },
      { label: "+501", value: "+501" },
      { label: "+502", value: "+502" },
      { label: "+503", value: "+503" },
      { label: "+504", value: "+504" },
      { label: "+505", value: "+505" },
      { label: "+506", value: "+506" },
      { label: "+507", value: "+507" },
      { label: "+508", value: "+508" },
      { label: "+509", value: "+509" },
      { label: "+537", value: "+537" },
      { label: "+590", value: "+590" },
      { label: "+591", value: "+591" },
      { label: "+593", value: "+593" },
      { label: "+594", value: "+594" },
      { label: "+595", value: "+595" },
      { label: "+596", value: "+596" },
      { label: "+597", value: "+597" },
      { label: "+598", value: "+598" },
      { label: "+599", value: "+599" },
      { label: "+670", value: "+670" },
      { label: "+672", value: "+672" },
      { label: "+673", value: "+673" },
      { label: "+674", value: "+674" },
      { label: "+675", value: "+675" },
      { label: "+676", value: "+676" },
      { label: "+677", value: "+677" },
      { label: "+678", value: "+678" },
      { label: "+679", value: "+679" },
      { label: "+680", value: "+680" },
      { label: "+681", value: "+681" },
      { label: "+682", value: "+682" },
      { label: "+683", value: "+683" },
      { label: "+685", value: "+685" },
      { label: "+686", value: "+686" },
      { label: "+687", value: "+687" },
      { label: "+688", value: "+688" },
      { label: "+689", value: "+689" },
      { label: "+690", value: "+690" },
      { label: "+691", value: "+691" },
      { label: "+692", value: "+692" },
      { label: "+850", value: "+850" },
      { label: "+852", value: "+852" },
      { label: "+853", value: "+853" },
      { label: "+855", value: "+855" },
      { label: "+856", value: "+856" },
      { label: "+872", value: "+872" },
      { label: "+880", value: "+880" },
      { label: "+886", value: "+886" },
      { label: "+960", value: "+960" },
      { label: "+961", value: "+961" },
      { label: "+962", value: "+962" },
      { label: "+963", value: "+963" },
      { label: "+964", value: "+964" },
      { label: "+965", value: "+965" },
      { label: "+966", value: "+966" },
      { label: "+967", value: "+967" },
      { label: "+968", value: "+968" },
      { label: "+970", value: "+970" },
      { label: "+971", value: "+971" },
      { label: "+972", value: "+972" },
      { label: "+973", value: "+973" },
      { label: "+974", value: "+974" },
      { label: "+975", value: "+975" },
      { label: "+976", value: "+976" },
      { label: "+977", value: "+977" },
      { label: "+992", value: "+992" },
      { label: "+993", value: "+993" },
      { label: "+994", value: "+994" },
      { label: "+995", value: "+995" },
      { label: "+996", value: "+996" },
      { label: "+998", value: "+998" },
    ];

    const AmplifyCountryDialCode = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The ID of the field.  Should match with its corresponding input's ID. */
        this.fieldId = constants.COUNTRY_DIAL_CODE_SUFFIX;
        /** The options of the country dial code select input. */
        this.options = countryDialCodes;
        /** Default selected dial code */
        this.dialCode = "+1";
      }
      componentWillLoad() {
        this.setSelectedDialCode();
      }
      watchDialCodeHandler() {
        this.setSelectedDialCode();
      }
      setSelectedDialCode() {
        if (typeof this.dialCode === "number") {
          this.selectedDialCode = `+${this.dialCode}`;
        } else {
          this.selectedDialCode = this.dialCode;
        }
      }
      render() {
        return index.h("amplify-select", {
          fieldId: this.fieldId,
          options: this.options,
          handleInputChange: this.handleInputChange,
          selected: this.selectedDialCode,
        });
      }
      static get watchers() {
        return {
          dialCode: ["watchDialCodeHandler"],
        };
      }
    };

    const AmplifyEmailField = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.EMAIL_SUFFIX;
        /** Used for the EMAIL label */
        this.label = Translations.Translations.EMAIL_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.EMAIL_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
      }
      render() {
        return index.h("amplify-form-field", {
          fieldId: this.fieldId,
          label: core.I18n.get(this.label),
          placeholder: core.I18n.get(this.placeholder),
          type: "email",
          name: "email",
          required: this.required,
          handleInputChange: this.handleInputChange,
          value: this.value,
          inputProps: this.inputProps,
          disabled: this.disabled,
          hint: this.hint,
        });
      }
    };

    const amplifyFormSectionCss =
      "amplify-form-section{--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-md-sub);--subtitle-size:var(--amplify-grey);--subtitle-color:var(--amplify-grey);--footer-color:var(--amplify-grey);--footer-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.form-section-header{margin:1rem 0 1.5rem 0}.form-section-header .header{color:var(--header-color);font-size:var(--header-size);font-weight:700;margin-bottom:0.75rem}.form-section-header .subtitle{font-weight:400;font-size:var(--amplify-text-sm);color:var(--subtitle-color)}.form-section-footer{font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--footer-size);color:var(--footer-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}@media (min-width: 672px){.form-section-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}}.form-section-footer *+*{margin-top:15px}";

    const AmplifyFormSection = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** (Optional) Used as a the default value within the default footer slot */
        this.submitButtonText = "Submit";
        /** String prefix for the data-test attributes in this component primarily used for testing purposes */
        this.testDataPrefix = "form-section";
        /** Loading state for the form */
        this.loading = false;
        /** Secondary footer component or text */
        this.secondaryFooterContent = null;
      }
      // eslint-disable-next-line
      handleFormSubmit(ev) {
        this.handleSubmit(ev.detail);
      }
      render() {
        return index.h(
          "form",
          { onSubmit: this.handleSubmit },
          index.h(
            "amplify-section",
            null,
            index.h(
              "div",
              null,
              index.h(
                "slot",
                { name: "amplify-form-section-header" },
                index.h(
                  "div",
                  { class: "form-section-header" },
                  index.h(
                    "h3",
                    {
                      class: "header",
                      "data-test": this.testDataPrefix + "-header-section",
                    },
                    this.headerText
                  ),
                  index.h(
                    "div",
                    { class: "subtitle" },
                    index.h("slot", { name: "subtitle" })
                  )
                )
              )
            ),
            index.h("slot", null),
            index.h(
              "div",
              null,
              index.h(
                "slot",
                { name: "amplify-form-section-footer" },
                index.h(
                  "div",
                  { class: "form-section-footer" },
                  index.h(
                    "amplify-button",
                    {
                      type: "submit",
                      "data-test":
                        this.testDataPrefix +
                        "-" +
                        this.testDataPrefix +
                        "-button",
                    },
                    this.loading
                      ? index.h("amplify-loading-spinner", null)
                      : index.h("span", null, this.submitButtonText)
                  ),
                  this.secondaryFooterContent
                )
              )
            )
          )
        );
      }
    };
    AmplifyFormSection.style = amplifyFormSectionCss;

    const AmplifyPasswordField = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.PASSWORD_SUFFIX;
        /** Used for the password label */
        this.label = Translations.Translations.PASSWORD_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.PASSWORD_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
      }
      render() {
        return index.h("amplify-form-field", {
          type: "password",
          name: "password",
          fieldId: this.fieldId,
          label: core.I18n.get(this.label),
          placeholder: core.I18n.get(this.placeholder),
          hint: this.hint,
          required: this.required,
          handleInputChange: this.handleInputChange,
          value: this.value,
          inputProps: this.inputProps,
          disabled: this.disabled,
        });
      }
    };

    const amplifyPhoneFieldCss =
      ".phone-field{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:start;align-items:flex-start;width:100%}.phone-field input{border-left:none;border-radius:0 3px 3px 0}";

    const AmplifyPhoneField = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.PHONE_SUFFIX;
        /** Used for the Phone label */
        this.label = Translations.Translations.PHONE_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.PHONE_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
      }
      render() {
        return index.h(
          "div",
          null,
          index.h(
            "amplify-form-field",
            { label: core.I18n.get(this.label), hint: this.hint },
            index.h(
              "div",
              { class: "phone-field", slot: "input" },
              index.h("amplify-country-dial-code", {
                dialCode: this.dialCode,
                handleInputChange: this.handleInputChange,
              }),
              index.h("amplify-input", {
                fieldId: this.fieldId,
                type: "tel",
                handleInputChange: this.handleInputChange,
                placeholder: core.I18n.get(this.placeholder),
                name: this.fieldId,
                value: this.value,
                inputProps: this.inputProps,
                disabled: this.disabled,
                required: this.required,
              })
            )
          )
        );
      }
    };
    AmplifyPhoneField.style = amplifyPhoneFieldCss;

    const amplifySelectCss =
      ":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-focus:var(--amplify-primary-color);--background-image:linear-gradient(45deg, transparent 50%, gray 50%),\n  \tlinear-gradient(135deg, gray 50%, transparent 50%),\n  \tlinear-gradient(to right, #ccc, #ccc)}.select{padding:1rem 1.75rem 1rem 1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);border:1px solid var(--border-color);border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:auto;flex-basis:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0;height:3.125rem;background-image:var(--background-image);background-position:calc(100% - 1rem) calc(1em + 0.5rem), calc(100% - 0.7rem) calc(1em + 0.5rem), calc(100% - 2.5em) 0.5em;background-size:6px 5px, 6px 5px, 0px 1.5em;background-repeat:no-repeat}.select :focus{outline:none;border-color:var(--border-focus)}";

    const DEFAULT_SELECT_OPTION = [{ label: "", value: 1 }];
    const logger = new core.Logger("amplify-select");
    const AmplifySelect = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The options of the select input. Must be an Array of Objects with an Object shape of {label: string, value: string|number} */
        this.options = DEFAULT_SELECT_OPTION;
      }
      componentWillLoad() {
        this.selectOptions = this.contructSelectOptions(this.options);
      }
      handleSelectOptionsChange() {
        this.selectOptions = this.contructSelectOptions(this.options);
      }
      isSelectedOptionValid(selected) {
        if (
          selected &&
          !this.options.some((option) => option.value === selected)
        ) {
          logger.warn(
            "Selected option does not exist in options values, falling back to initial option"
          );
          return false;
        }
        return true;
      }
      contructSelectOptions(opts) {
        this.isSelectedOptionValid(this.selected);
        const content = [];
        opts.forEach((opt) => {
          content.push(
            index.h(
              "option",
              { value: opt.value, selected: opt.value === this.selected },
              opt.label
            )
          );
        });
        return content;
      }
      render() {
        return index.h(
          "select",
          {
            name: this.fieldId,
            id: this.fieldId,
            class: "select",
            onChange: this.handleInputChange,
          },
          this.selectOptions
        );
      }
      static get watchers() {
        return {
          options: ["handleSelectOptionsChange"],
          selected: ["handleSelectOptionsChange"],
        };
      }
    };
    AmplifySelect.style = amplifySelectCss;

    const AmplifyUsernameField = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Based on the type of field e.g. sign in, sign up, forgot password, etc. */
        this.fieldId = constants.USERNAME_SUFFIX;
        /** Used for the username label */
        this.label = Translations.Translations.USERNAME_LABEL;
        /** Used for the placeholder label */
        this.placeholder = Translations.Translations.USERNAME_PLACEHOLDER;
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
      }
      render() {
        return index.h("amplify-form-field", {
          name: "username",
          fieldId: this.fieldId,
          label: core.I18n.get(this.label),
          placeholder: core.I18n.get(this.placeholder),
          required: this.required,
          handleInputChange: this.handleInputChange,
          value: this.value,
          inputProps: this.inputProps,
          disabled: this.disabled,
          hint: this.hint,
        });
      }
    };

    exports.amplify_auth_fields = AmplifyAuthFields;
    exports.amplify_code_field = AmplifyCodeField;
    exports.amplify_country_dial_code = AmplifyCountryDialCode;
    exports.amplify_email_field = AmplifyEmailField;
    exports.amplify_form_section = AmplifyFormSection;
    exports.amplify_password_field = AmplifyPasswordField;
    exports.amplify_phone_field = AmplifyPhoneField;
    exports.amplify_select = AmplifySelect;
    exports.amplify_username_field = AmplifyUsernameField;

    /***/
  },

  /***/ 30637: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);
    const authHelpers = __webpack_require__(79513);

    const authSlotNames = {
      [authTypes.AuthState.SignIn]: "sign-in",
      [authTypes.AuthState.ConfirmSignIn]: "confirm-sign-in",
      [authTypes.AuthState.SignUp]: "sign-up",
      [authTypes.AuthState.ConfirmSignUp]: "confirm-sign-up",
      [authTypes.AuthState.ForgotPassword]: "forgot-password",
      [authTypes.AuthState.ResetPassword]: "require-new-password",
      [authTypes.AuthState.VerifyContact]: "verify-contact",
      [authTypes.AuthState.TOTPSetup]: "totp-setup",
      [authTypes.AuthState.Loading]: "loading",
    };

    const amplifyAuthenticatorCss =
      ":host{--background-color:var(--amplify-background-color);--width:28.75rem;--min-width:20rem;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);--border-radius:6px;--padding:35px 40px;--margin-bottom:20px;--container-height:100vh;--container-display:flex;--container-justify:center;--container-align:center}.auth-container{display:var(--container-display);-ms-flex-pack:var(--container-justify);justify-content:var(--container-justify);-ms-flex-align:var(--container-align);align-items:var(--container-align);min-height:var(--container-height)}";

    const logger = new core.Logger("Authenticator");
    const AmplifyAuthenticator = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Initial starting state of the Authenticator component. E.g. If `signup` is passed the default component is set to AmplifySignUp */
        this.initialAuthState = authTypes.AuthState.SignIn;
        /** Callback for Authenticator state machine changes */
        this.handleAuthStateChange = () => {};
        /** Hide amplify-toast for auth errors */
        this.hideToast = false;
        this.authState = authTypes.AuthState.Loading;
        this.toastMessage = "";
        this.handleExternalAuthEvent = ({ payload }) => {
          switch (payload.event) {
            case "cognitoHostedUI":
            case "signIn":
              authHelpers.checkContact(
                payload.data,
                helpers.dispatchAuthStateChangeEvent
              );
              break;
            case "cognitoHostedUI_failure":
            case "parsingUrl_failure":
            case "signOut":
            case "customGreetingSignOut":
              return helpers.dispatchAuthStateChangeEvent(
                this.initialAuthState
              );
          }
        };
        this.handleToastEvent = ({ payload }) => {
          switch (payload.event) {
            case constants.TOAST_AUTH_ERROR_EVENT:
              if (payload.message) this.toastMessage = payload.message;
              break;
          }
        };
      }
      async componentWillLoad() {
        helpers.onAuthUIStateChange((authState, authData) => {
          this.onAuthStateChange(authState, authData);
          this.toastMessage = "";
        });
        if (!this.hideToast)
          core.Hub.listen(constants.UI_AUTH_CHANNEL, this.handleToastEvent);
        core.Hub.listen(constants.AUTH_CHANNEL, this.handleExternalAuthEvent);
        Auth.appendToCognitoUserAgent("amplify-authenticator");
        await this.checkUser();
      }
      async checkUser() {
        if (
          !Auth.Auth ||
          typeof Auth.Auth.currentAuthenticatedUser !== "function"
        ) {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        return Auth.Auth.currentAuthenticatedUser()
          .then((user) => {
            helpers.dispatchAuthStateChangeEvent(
              authTypes.AuthState.SignedIn,
              user
            );
          })
          .catch(() => {
            helpers.dispatchAuthStateChangeEvent(this.initialAuthState);
          });
      }
      async onAuthStateChange(nextAuthState, data) {
        if (nextAuthState === undefined)
          return logger.error("nextAuthState cannot be undefined");
        logger.info(
          "Inside onAuthStateChange Method current authState:",
          this.authState
        );
        if (nextAuthState === authTypes.AuthState.SignedOut) {
          this.authState = this.initialAuthState;
        } else {
          this.authState = nextAuthState;
        }
        this.authData = data;
        if (this.authData) logger.log("Auth Data was set:", this.authData);
        if (this.authState === nextAuthState) {
          this.handleAuthStateChange(this.authState, this.authData);
          logger.info(`authState has been updated to ${this.authState}`);
        }
      }
      // Returns the auth component corresponding to the given authState.
      getAuthComponent(authState) {
        switch (authState) {
          case authTypes.AuthState.SignIn:
            return index.h("amplify-sign-in", {
              federated: this.federated,
              usernameAlias: this.usernameAlias,
            });
          case authTypes.AuthState.ConfirmSignIn:
            return index.h("amplify-confirm-sign-in", { user: this.authData });
          case authTypes.AuthState.SignUp:
            return index.h("amplify-sign-up", {
              usernameAlias: this.usernameAlias,
            });
          case authTypes.AuthState.ConfirmSignUp:
            return index.h("amplify-confirm-sign-up", {
              user: this.authData,
              usernameAlias: this.usernameAlias,
            });
          case authTypes.AuthState.ForgotPassword:
            return index.h("amplify-forgot-password", {
              usernameAlias: this.usernameAlias,
            });
          case authTypes.AuthState.ResetPassword:
            return index.h("amplify-require-new-password", {
              user: this.authData,
            });
          case authTypes.AuthState.VerifyContact:
            return index.h("amplify-verify-contact", { user: this.authData });
          case authTypes.AuthState.TOTPSetup:
            return index.h("amplify-totp-setup", { user: this.authData });
          case authTypes.AuthState.Loading:
            return index.h("div", null, "Loading...");
          default:
            throw new Error(`Unhandled auth state: ${authState}`);
        }
      }
      // Returns a slot containing the Auth component corresponding to the given authState
      getSlotWithAuthComponent(authState) {
        const authComponent = this.getAuthComponent(authState);
        const slotName = authSlotNames[authState];
        const slotIsEmpty =
          this.el.querySelector(`[slot="${slotName}"]`) === null; // true if no element has been inserted to the slot
        /**
         * Connect the inner auth component to DOM only if the slot hasn't been overwritten. This prevents
         * the overwritten component from calling its lifecycle methods.
         */
        return index.h(
          "slot",
          { name: slotName },
          slotIsEmpty && authComponent
        );
      }
      disconnectedCallback() {
        core.Hub.remove(constants.AUTH_CHANNEL, this.handleExternalAuthEvent);
        if (!this.hideToast)
          core.Hub.remove(constants.UI_AUTH_CHANNEL, this.handleToastEvent);
        return helpers.onAuthUIStateChange;
      }
      render() {
        return index.h(
          index.Host,
          null,
          !this.hideToast &&
            this.toastMessage &&
            index.h("amplify-toast", {
              message: this.toastMessage,
              handleClose: () => {
                this.toastMessage = "";
              },
              "data-test": "authenticator-error",
            }),
          this.authState === authTypes.AuthState.SignedIn
            ? [index.h("slot", { name: "greetings" }), index.h("slot", null)]
            : index.h(
                "div",
                { class: "auth-container" },
                this.getSlotWithAuthComponent(this.authState)
              )
        );
      }
      get el() {
        return index.getElement(this);
      }
    };
    AmplifyAuthenticator.style = amplifyAuthenticatorCss;

    exports.amplify_authenticator = AmplifyAuthenticator;

    /***/
  },

  /***/ 32942: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const amplifyButtonCss =
      "amplify-button{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--border-radius:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){amplify-button{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style);border-radius:var(--border-radius)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";

    const AmplifyButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Type of the button: 'button', 'submit' or 'reset' */
        this.type = "button";
        /** Variant of a button: 'button' | 'anchor | 'icon' */
        this.variant = "button";
        /** Disabled state of the button */
        this.disabled = false;
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "button",
            {
              class: {
                [this.variant]: true,
              },
              type: this.type,
              disabled: this.disabled,
              onClick: this.handleButtonClick,
            },
            this.variant === "icon" &&
              index.h("amplify-icon", { name: this.icon }),
            index.h("slot", null)
          )
        );
      }
      get el() {
        return index.getElement(this);
      }
    };
    AmplifyButton.style = amplifyButtonCss;

    const amplifyLoadingSpinnerCss =
      ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

    const AmplifyLoadingSpinner = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h("amplify-icon", {
          class: "loading-spinner",
          name: "loading",
        });
      }
    };
    AmplifyLoadingSpinner.style = amplifyLoadingSpinnerCss;

    const amplifySectionCss =
      "amplify-section{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}";

    const AmplifySection = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Equivalent to html section role */
        this.role = "application";
      }
      render() {
        return index.h(
          "section",
          { class: "section", role: this.role },
          index.h("slot", null)
        );
      }
      get el() {
        return index.getElement(this);
      }
    };
    AmplifySection.style = amplifySectionCss;

    exports.amplify_button = AmplifyButton;
    exports.amplify_loading_spinner = AmplifyLoadingSpinner;
    exports.amplify_section = AmplifySection;

    /***/
  },

  /***/ 67436: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const interactions = __webpack_require__(28074);

    // AudioRecorder settings
    const RECORDER_EXPORT_MIME_TYPE = "application/octet-stream";
    const DEFAULT_EXPORT_SAMPLE_RATE = 16000;
    const FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)
    const FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data
    const FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data
    const FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame

    /**
     * Merges multiple buffers into one.
     */
    const mergeBuffers = (bufferArray, recLength) => {
      const result = new Float32Array(recLength);
      let offset = 0;
      for (let i = 0; i < bufferArray.length; i++) {
        result.set(bufferArray[i], offset);
        offset += bufferArray[i].length;
      }
      return result;
    };
    /**
     * Downsamples audio to desired export sample rate.
     */
    const downsampleBuffer = (buffer, recordSampleRate, exportSampleRate) => {
      if (exportSampleRate === recordSampleRate) {
        return buffer;
      }
      const sampleRateRatio = recordSampleRate / exportSampleRate;
      const newLength = Math.round(buffer.length / sampleRateRatio);
      const result = new Float32Array(newLength);
      let offsetResult = 0;
      let offsetBuffer = 0;
      while (offsetResult < result.length) {
        const nextOffsetBuffer = Math.round(
          (offsetResult + 1) * sampleRateRatio
        );
        let accum = 0,
          count = 0;
        for (
          let i = offsetBuffer;
          i < nextOffsetBuffer && i < buffer.length;
          i++
        ) {
          accum += buffer[i];
          count++;
        }
        result[offsetResult] = accum / count;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
      }
      return result;
    };
    /**
     * converts raw audio values to 16 bit pcm.
     */
    const floatTo16BitPCM = (output, offset, input) => {
      let byteOffset = offset;
      for (let i = 0; i < input.length; i++, byteOffset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      }
    };
    /**
     * Write given strings in big-endian order.
     */
    const writeString = (view, offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };
    /**
     * Encodes raw pcm audio into a wav file.
     */
    const encodeWAV = (samples, exportSampleRate) => {
      /**
       * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
       */
      const audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.
      const fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.
      const dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.
      const totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
      // create DataView object to write byte values into
      const buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.
      const view = new DataView(buffer);
      /**
       * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
       */
      // RIFF header
      writeString(view, 0, "RIFF"); // At offset 0, write the letters "RIFF"
      view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.
      writeString(view, 8, "WAVE"); // At offset 8, write the format type "WAVE"
      // fmt subchunk
      writeString(view, 12, "fmt "); //chunkdId 'fmt '
      view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.
      view.setUint16(20, 1, true); // Audio format code, which is 1 for PCM.
      view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.
      view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.
      view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.
      view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.
      view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
      // data subchunk
      writeString(view, 36, "data"); // write the chunkId 'data'
      view.setUint32(40, audioSize, true); // Audio byte size
      floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.
      return view;
    };
    /**
     * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
     *
     * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
     * @param recLength {number} - total length of recorded audio
     * @param recordSampleRate {number} - sample rate of the recorded audio
     * @param exportSampleRate {number} - desired sample rate of the exported file
     */
    const exportBuffer = (
      recBuffer,
      recLength,
      recordSampleRate,
      exportSampleRate
    ) => {
      const mergedBuffers = mergeBuffers(recBuffer, recLength);
      const downsampledBuffer = downsampleBuffer(
        mergedBuffers,
        recordSampleRate,
        exportSampleRate
      );
      const encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
      const audioBlob = new Blob([encodedWav], {
        type: RECORDER_EXPORT_MIME_TYPE,
      });
      return audioBlob;
    };

    const logger = new core.Logger("AudioRecorder");
    class AudioRecorder {
      constructor(options) {
        // input mic stream is stored in a buffer
        this.streamBuffer = [];
        this.streamBufferLength = 0;
        this.recording = false;
        this.options = options;
      }
      /**
       * This must be called first to enable audio context and request microphone access.
       * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
       */
      async init() {
        if (core.browserOrNode().isBrowser) {
          window.AudioContext =
            window.AudioContext || window.webkitAudioContext;
          this.audioContext = new AudioContext();
          await navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
              this.audioSupported = true;
              this.setupAudioNodes(stream);
            })
            .catch(() => {
              this.audioSupported = false;
              return Promise.reject("Audio is not supported");
            });
        } else {
          this.audioSupported = false;
          return Promise.reject("Audio is not supported");
        }
      }
      /**
       * Setup audio nodes after successful `init`.
       */
      async setupAudioNodes(stream) {
        try {
          await this.audioContext.resume();
        } catch (err) {
          logger.error(err);
        }
        const sourceNode = this.audioContext.createMediaStreamSource(stream);
        const processorNode = this.audioContext.createScriptProcessor(
          4096,
          1,
          1
        );
        processorNode.onaudioprocess = (audioProcessingEvent) => {
          if (!this.recording) return;
          const stream = audioProcessingEvent.inputBuffer.getChannelData(0);
          this.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream
          this.streamBufferLength += stream.length;
          this.analyse();
        };
        const analyserNode = this.audioContext.createAnalyser();
        analyserNode.minDecibels = FFT_MIN_DECIBELS;
        analyserNode.maxDecibels = FFT_MAX_DECIBELS;
        analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
        sourceNode.connect(analyserNode);
        analyserNode.connect(processorNode);
        processorNode.connect(sourceNode.context.destination);
        this.analyserNode = analyserNode;
      }
      /**
       * Start recording audio and listen for silence.
       *
       * @param onSilence {SilenceHandler} - called whenever silence is detected
       * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
       */
      async startRecording(onSilence, visualizer) {
        if (this.recording || !this.audioSupported) return;
        this.onSilence = onSilence || function () {};
        this.visualizer = visualizer || function () {};
        const context = this.audioContext;
        try {
          await context.resume();
        } catch (err) {
          logger.error(err);
        }
        this.start = Date.now();
        this.recording = true;
      }
      /**
       * Pause recording
       */
      stopRecording() {
        if (!this.audioSupported) return;
        this.recording = false;
      }
      /**
       * Pause recording and clear audio buffer
       */
      clear() {
        this.stopRecording();
        this.streamBufferLength = 0;
        this.streamBuffer = [];
      }
      /**
       * Plays given audioStream with audioContext
       *
       * @param buffer {Uint8Array} - audioStream to be played
       */
      play(buffer) {
        if (!buffer || !this.audioSupported) return;
        const myBlob = new Blob([buffer]);
        return new Promise((res, rej) => {
          const fileReader = new FileReader();
          fileReader.onload = () => {
            if (this.playbackSource) this.playbackSource.disconnect(); // disconnect previous playback source
            this.playbackSource = this.audioContext.createBufferSource();
            const successCallback = (buf) => {
              this.playbackSource.buffer = buf;
              this.playbackSource.connect(this.audioContext.destination);
              this.playbackSource.onended = () => {
                return res();
              };
              this.playbackSource.start(0);
            };
            const errorCallback = (err) => {
              return rej(err);
            };
            this.audioContext.decodeAudioData(
              fileReader.result,
              successCallback,
              errorCallback
            );
          };
          fileReader.onerror = () => rej();
          fileReader.readAsArrayBuffer(myBlob);
        });
      }
      /**
       * Stops playing audio if there's a playback source connected.
       */
      stop() {
        if (this.playbackSource) {
          this.playbackSource.stop();
        }
      }
      /**
       * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
       */
      analyse() {
        if (!this.audioSupported) return;
        const analyser = this.analyserNode;
        analyser.fftSize = FFT_SIZE;
        const bufferLength = analyser.fftSize;
        const dataArray = new Uint8Array(bufferLength);
        const amplitude = this.options.amplitude;
        const time = this.options.time;
        analyser.getByteTimeDomainData(dataArray);
        this.visualizer(dataArray, bufferLength);
        for (let i = 0; i < bufferLength; i++) {
          // Normalize between -1 and 1.
          const curr_value_time = dataArray[i] / 128 - 1.0;
          if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
            this.start = Date.now();
          }
        }
        const newtime = Date.now();
        const elapsedTime = newtime - this.start;
        if (elapsedTime > time) {
          this.onSilence();
        }
      }
      /**
       * Encodes recorded buffer to a wav file and exports it to a blob.
       *
       * @param exportSampleRate {number} - desired sample rate of the exported buffer
       */
      async exportWAV(exportSampleRate = DEFAULT_EXPORT_SAMPLE_RATE) {
        if (!this.audioSupported) return;
        const recordSampleRate = this.audioContext.sampleRate;
        const blob = exportBuffer(
          this.streamBuffer,
          this.streamBufferLength,
          recordSampleRate,
          exportSampleRate
        );
        this.clear();
        return blob;
      }
    }

    const visualize = (dataArray, bufferLength, canvas) => {
      if (!canvas) return;
      if (!core.browserOrNode().isBrowser)
        throw new Error("Visualization is not supported on non-browsers.");
      const { width, height } = canvas.getBoundingClientRect();
      // need to update the default canvas width and height
      canvas.width = width;
      canvas.height = height;
      const canvasCtx = canvas.getContext("2d");
      canvasCtx.fillStyle = "white";
      canvasCtx.clearRect(0, 0, width, height);
      const draw = () => {
        canvasCtx.fillRect(0, 0, width, height);
        canvasCtx.lineWidth = 1;
        const color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--amplify-primary-color");
        canvasCtx.strokeStyle = !color || color === "" ? "#ff9900" : color; // TODO: try separate css variable
        canvasCtx.beginPath();
        const sliceWidth = (width * 1.0) / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength || i % 3 === 0; i++) {
          const value = dataArray[i] / 128.0;
          const y = (value * height) / 2;
          if (i === 0) {
            canvasCtx.moveTo(x, y);
          } else {
            canvasCtx.lineTo(x, y);
          }
          x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
      };
      // Register our draw function with requestAnimationFrame.
      requestAnimationFrame(draw);
    };

    const amplifyChatbotCss =
      ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";

    // enum for possible bot states
    var ChatState;
    (function (ChatState) {
      ChatState[(ChatState["Initial"] = 0)] = "Initial";
      ChatState[(ChatState["Listening"] = 1)] = "Listening";
      ChatState[(ChatState["SendingText"] = 2)] = "SendingText";
      ChatState[(ChatState["SendingVoice"] = 3)] = "SendingVoice";
      ChatState[(ChatState["Error"] = 4)] = "Error";
    })(ChatState || (ChatState = {}));
    // Message types
    var MessageFrom;
    (function (MessageFrom) {
      MessageFrom["Bot"] = "bot";
      MessageFrom["User"] = "user";
    })(MessageFrom || (MessageFrom = {}));
    // Error types
    var ChatErrorType;
    (function (ChatErrorType) {
      ChatErrorType[(ChatErrorType["Recoverable"] = 0)] = "Recoverable";
      ChatErrorType[(ChatErrorType["Unrecoverable"] = 1)] = "Unrecoverable";
    })(ChatErrorType || (ChatErrorType = {}));
    const AmplifyChatbot = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Clear messages when conversation finishes */
        this.clearOnComplete = false;
        /** Continue listening to users after they send the message */
        this.conversationModeOn = false;
        /** Text placed in the top header */
        this.botTitle = Translations.Translations.CHATBOT_TITLE;
        /** Whether voice chat is enabled */
        this.voiceEnabled = false;
        /** Whether text chat is enabled */
        this.textEnabled = true;
        /** Amount of silence (in ms) to wait for */
        this.silenceTime = 1500;
        /** Noise threshold between -1 and 1. Anything below is considered a silence. */
        this.silenceThreshold = 0.2;
        /** Messages in current session */
        this.messages = [];
        /** Text input box value  */
        this.text = "";
        /** Current app state */
        this.chatState = ChatState.Initial;
        /**
         * Rendering methods
         */
        this.messageJSX = (messages) => {
          const messageList = messages.map((message) =>
            index.h("div", { class: `bubble ${message.from}` }, message.content)
          );
          if (
            this.chatState === ChatState.SendingText ||
            this.chatState === ChatState.SendingVoice
          ) {
            // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
            const client =
              this.chatState === ChatState.SendingText
                ? MessageFrom.Bot
                : MessageFrom.User;
            messageList.push(
              index.h(
                "div",
                { class: `bubble ${client}` },
                index.h(
                  "div",
                  { class: `dot-flashing ${client}` },
                  index.h("span", { class: "dot left" }),
                  index.h("span", { class: "dot middle" }),
                  index.h("span", { class: "dot right" })
                )
              )
            );
          }
          return messageList;
        };
        this.chatCompleted = index.createEvent(this, "chatCompleted", 7);
      }
      // Occurs when user presses enter in input box
      submitHandler(_event) {
        this.sendTextMessage();
      }
      /**
       * Lifecycle functions
       */
      componentWillLoad() {
        if (
          !interactions.Interactions ||
          typeof interactions.Interactions.onComplete !== "function"
        ) {
          throw new Error(constants.NO_INTERACTIONS_MODULE_FOUND);
        }
        this.validateProps();
      }
      componentDidRender() {
        // scroll to the bottom if necessary
        const body = this.element.shadowRoot.querySelector(".body");
        body.scrollTop = body.scrollHeight;
      }
      validateProps() {
        if (!this.voiceEnabled && !this.textEnabled) {
          this.setError(
            Translations.Translations.CHAT_DISABLED_ERROR,
            ChatErrorType.Unrecoverable
          );
          return;
        } else if (!this.botName) {
          this.setError(
            Translations.Translations.NO_BOT_NAME_ERROR,
            ChatErrorType.Unrecoverable
          );
          return;
        }
        if (this.welcomeMessage)
          this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        // Initialize AudioRecorder if voice is enabled
        if (this.voiceEnabled) {
          this.audioRecorder = new AudioRecorder({
            time: this.silenceTime,
            amplitude: this.silenceThreshold,
          });
          this.audioRecorder.init().catch((err) => {
            this.setError(err, ChatErrorType.Recoverable);
          });
        }
        // Callback function to be called after chat is completed
        const onComplete = (err, data) => {
          this.chatCompleted.emit({
            data,
            err,
          });
          if (this.clearOnComplete) {
            this.reset();
          } else {
            this.chatState = ChatState.Initial;
          }
        };
        try {
          interactions.Interactions.onComplete(this.botName, onComplete);
        } catch (err) {
          this.setError(err, ChatErrorType.Unrecoverable);
        }
      }
      /**
       * Handlers
       */
      handleSubmit(event) {
        event.preventDefault();
        this.sendTextMessage();
      }
      handleMicButton() {
        if (this.chatState !== ChatState.Initial) return;
        this.audioRecorder.stop();
        this.chatState = ChatState.Listening;
        this.audioRecorder.startRecording(
          () => this.handleSilence(),
          (data, length) => this.visualizer(data, length)
        );
      }
      handleSilence() {
        this.chatState = ChatState.SendingVoice;
        this.audioRecorder.stopRecording();
        this.audioRecorder.exportWAV().then((blob) => {
          this.sendVoiceMessage(blob);
        });
      }
      handleTextChange(event) {
        const target = event.target;
        this.text = target.value;
      }
      handleCancelButton() {
        this.audioRecorder.clear();
        this.chatState = ChatState.Initial;
      }
      handleToastClose(errorType) {
        this.error = undefined; // clear error
        // if error is recoverable, reset the app state to initial
        if (errorType === ChatErrorType.Recoverable) {
          this.chatState = ChatState.Initial;
        }
      }
      /**
       * Visualization
       */
      visualizer(dataArray, bufferLength) {
        const canvas = this.element.shadowRoot.querySelector("canvas");
        visualize(dataArray, bufferLength, canvas);
      }
      /**
       * Interactions helpers
       */
      async sendTextMessage() {
        if (this.text.length === 0 || this.chatState !== ChatState.Initial)
          return;
        const text = this.text;
        this.text = "";
        this.appendToChat(text, MessageFrom.User);
        this.chatState = ChatState.SendingText;
        let response;
        try {
          response = await interactions.Interactions.send(this.botName, text);
        } catch (err) {
          this.setError(err, ChatErrorType.Recoverable);
          return;
        }
        if (response.message) {
          this.appendToChat(response.message, MessageFrom.Bot);
        }
        this.chatState = ChatState.Initial;
      }
      async sendVoiceMessage(audioInput) {
        const interactionsMessage = {
          content: audioInput,
          options: {
            messageType: "voice",
          },
        };
        let response;
        try {
          response = await interactions.Interactions.send(
            this.botName,
            interactionsMessage
          );
        } catch (err) {
          this.setError(err, ChatErrorType.Recoverable);
          return;
        }
        this.chatState = ChatState.Initial;
        const dialogState = response.dialogState;
        if (response.inputTranscript)
          this.appendToChat(response.inputTranscript, MessageFrom.User);
        this.appendToChat(response.message, MessageFrom.Bot);
        await this.audioRecorder
          .play(response.audioStream)
          .then(() => {
            // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
            if (
              this.conversationModeOn &&
              dialogState !== "Fulfilled" &&
              dialogState !== "Failed" &&
              this.chatState === ChatState.Initial
            ) {
              this.handleMicButton();
            }
          })
          .catch((err) => this.setError(err, ChatErrorType.Recoverable));
      }
      appendToChat(content, from) {
        this.messages = [
          ...this.messages,
          {
            content,
            from,
          },
        ];
      }
      /**
       * State control methods
       */
      setError(error, errorType) {
        const message = typeof error === "string" ? error : error.message;
        this.chatState = ChatState.Error;
        this.error = { message, errorType };
      }
      reset() {
        this.chatState = ChatState.Initial;
        this.text = "";
        this.error = undefined;
        this.messages = [];
        if (this.welcomeMessage)
          this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        this.audioRecorder && this.audioRecorder.clear();
      }
      listeningFooterJSX() {
        const visualization = index.h("canvas", { height: "50" });
        const cancelButton = index.h("amplify-button", {
          "data-test": "chatbot-cancel-button",
          handleButtonClick: () => this.handleCancelButton(),
          class: "icon-button",
          variant: "icon",
          icon: "ban",
        });
        return [visualization, cancelButton];
      }
      footerJSX() {
        if (this.chatState === ChatState.Listening)
          return this.listeningFooterJSX();
        const inputPlaceholder = this.textEnabled
          ? Translations.Translations.TEXT_INPUT_PLACEHOLDER
          : Translations.Translations.VOICE_INPUT_PLACEHOLDER;
        const textInput = index.h("amplify-input", {
          placeholder: core.I18n.get(inputPlaceholder),
          description: "text",
          handleInputChange: (evt) => this.handleTextChange(evt),
          value: this.text,
          disabled: this.chatState === ChatState.Error || !this.textEnabled,
        });
        const micButton =
          this.voiceEnabled &&
          index.h("amplify-button", {
            "data-test": "chatbot-mic-button",
            handleButtonClick: () => this.handleMicButton(),
            class: "icon-button",
            variant: "icon",
            icon: "microphone",
            disabled:
              this.chatState === ChatState.Error ||
              this.chatState !== ChatState.Initial,
          });
        const sendButton =
          this.textEnabled &&
          index.h("amplify-button", {
            "data-test": "chatbot-send-button",
            class: "icon-button",
            variant: "icon",
            icon: "send",
            handleButtonClick: () => this.sendTextMessage(),
            disabled:
              this.chatState === ChatState.Error ||
              this.chatState !== ChatState.Initial,
          });
        return [textInput, micButton, sendButton];
      }
      errorToast() {
        if (!this.error) return;
        const { message, errorType } = this.error;
        return index.h("amplify-toast", {
          message: core.I18n.get(message),
          handleClose: () => this.handleToastClose(errorType),
        });
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "div",
            { class: "amplify-chatbot" },
            index.h(
              "slot",
              { name: "header" },
              index.h(
                "div",
                { class: "header", "data-test": "chatbot-header" },
                core.I18n.get(this.botTitle)
              )
            ),
            index.h(
              "div",
              { class: "body", "data-test": "chatbot-body" },
              this.messageJSX(this.messages)
            ),
            index.h(
              "form",
              { onSubmit: (e) => this.handleSubmit(e) },
              index.h(
                "div",
                { class: "footer", "data-test": "chatbot-footer" },
                this.footerJSX()
              )
            ),
            this.errorToast()
          )
        );
      }
      get element() {
        return index.getElement(this);
      }
    };
    AmplifyChatbot.style = amplifyChatbotCss;

    exports.amplify_chatbot = AmplifyChatbot;

    /***/
  },

  /***/ 82093: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const amplifyCheckboxCss =
      ":host{--font-family:var(--amplify-font-family)}.checkbox{margin-bottom:22px;display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.checkbox input{margin-right:12px}";

    const AmplifyCheckbox = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** If `true`, the checkbox is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
        this.onClick = () => {
          this.checked = !this.checked;
        };
      }
      render() {
        return index.h(
          "span",
          { class: "checkbox" },
          index.h("input", {
            onClick: this.onClick,
            type: "checkbox",
            name: this.name,
            value: this.value,
            id: this.fieldId,
            checked: this.checked,
            disabled: this.disabled,
          }),
          index.h("amplify-label", { htmlFor: this.fieldId }, this.label)
        );
      }
    };
    AmplifyCheckbox.style = amplifyCheckboxCss;

    exports.amplify_checkbox = AmplifyCheckbox;

    /***/
  },

  /***/ 29930: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);
    const authHelpers = __webpack_require__(79513);

    const AmplifyConfirmSignIn = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Fires when confirm sign in form is submitted */
        this.handleSubmit = (event) => this.confirm(event);
        /** Used for header text in confirm sign in component */
        this.headerText = Translations.Translations.CONFIRM_SMS_CODE;
        /** Used for the submit button text in confirm sign in component */
        this.submitButtonText = Translations.Translations.CONFIRM;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Default form field */
        this.defaultFormFields = [
          {
            type: "code",
            required: true,
            handleInputChange: (event) => this.handleCodeChange(event),
          },
        ];
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = this.defaultFormFields;
        /** The MFA option to confirm with */
        this.mfaOption = authTypes.MfaOption.SMS;
        /* Whether or not the confirm-sign-in component is loading */
        this.loading = false;
      }
      componentWillLoad() {
        this.setup();
      }
      userHandler() {
        this.setup();
      }
      setup() {
        if (
          this.user &&
          this.user["challengeName"] ===
            authTypes.ChallengeName.SoftwareTokenMFA
        ) {
          this.mfaOption = authTypes.MfaOption.TOTP;
          // If header text is using default use TOTP string
          if (this.headerText === Translations.Translations.CONFIRM_SMS_CODE) {
            this.headerText = Translations.Translations.CONFIRM_TOTP_CODE;
          }
        }
        this.constructedFormFieldOptions = this.constructFormFieldOptions(
          this.formFields
        );
      }
      handleCodeChange(event) {
        this.code = event.target.value;
      }
      async confirm(event) {
        if (event) {
          event.preventDefault();
        }
        const mfaType =
          this.user["challengeName"] ===
          authTypes.ChallengeName.SoftwareTokenMFA
            ? authTypes.ChallengeName.SoftwareTokenMFA
            : null;
        if (!Auth.Auth || typeof Auth.Auth.confirmSignIn !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          await Auth.Auth.confirmSignIn(this.user, this.code, mfaType);
          await authHelpers.checkContact(this.user, this.handleAuthStateChange);
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        } finally {
          this.loading = false;
        }
      }
      constructFormFieldOptions(formFields) {
        const content = [];
        if (formFields === undefined) return undefined;
        if (formFields.length <= 0) return this.defaultFormFields;
        formFields.forEach((formField) => {
          if (typeof formField === "string" || formField.type !== "code") {
            // This is either a `string`, and/or a custom field that isn't `code`. Pass this directly.
            content.push(formField);
          } else {
            // This is a code input field. Attach input handler.
            content.push(
              Object.assign(
                { handleInputChange: (event) => this.handleCodeChange(event) },
                formField
              )
            );
          }
        });
        return content;
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              handleSubmit: this.handleSubmit,
              submitButtonText: core.I18n.get(this.submitButtonText),
              loading: this.loading,
              secondaryFooterContent: index.h(
                "span",
                null,
                index.h(
                  "amplify-button",
                  {
                    variant: "anchor",
                    onClick: () =>
                      this.handleAuthStateChange(authTypes.AuthState.SignIn),
                  },
                  core.I18n.get(Translations.Translations.BACK_TO_SIGN_IN)
                )
              ),
            },
            index.h("amplify-auth-fields", {
              formFields: this.constructedFormFieldOptions,
            })
          )
        );
      }
      static get watchers() {
        return {
          user: ["userHandler"],
        };
      }
    };

    const AmplifyConfirmSignUp = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = (event) => this.confirmSignUp(event);
        /** Used for header text in confirm sign up component */
        this.headerText = Translations.Translations.CONFIRM_SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in confirm sign up component */
        this.submitButtonText =
          Translations.Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this components
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = "username";
        this.loading = false;
        this.newFormFields = [];
        this.phoneNumber = {
          countryDialCodeValue: constants.COUNTRY_DIAL_CODE_DEFAULT,
          phoneNumberValue: null,
        };
      }
      componentWillLoad() {
        this.setup();
      }
      formFieldsHandler() {
        this.buildFormFields();
      }
      userHandler() {
        this.setup();
      }
      setup() {
        // TODO: Use optional chaining instead
        this.userInput = this.user && this.user.username;
        this._signUpAttrs = this.user && this.user.signUpAttrs;
        helpers.checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
      }
      buildDefaultFormFields() {
        this.newFormFields = [
          {
            type: `${this.usernameAlias}`,
            required: true,
            handleInputChange: this.handleFormFieldInputChange(
              `${this.usernameAlias}`
            ),
            value: this.userInput,
            disabled: this.userInput ? true : false,
            inputProps: { autocomplete: "username" },
          },
          {
            type: "code",
            label: core.I18n.get(
              Translations.Translations.CONFIRM_SIGN_UP_CODE_LABEL
            ),
            placeholder: core.I18n.get(
              Translations.Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER
            ),
            required: true,
            hint: index.h(
              "div",
              null,
              core.I18n.get(
                Translations.Translations.CONFIRM_SIGN_UP_LOST_CODE
              ),
              " ",
              index.h(
                "amplify-button",
                { variant: "anchor", onClick: () => this.resendConfirmCode() },
                core.I18n.get(
                  Translations.Translations.CONFIRM_SIGN_UP_RESEND_CODE
                )
              )
            ),
            handleInputChange: this.handleFormFieldInputChange("code"),
          },
        ];
      }
      buildFormFields() {
        if (this.formFields.length === 0) {
          this.buildDefaultFormFields();
        } else {
          const newFields = [];
          this.formFields.forEach((field) => {
            const newField = Object.assign({}, field);
            if (newField.type === "code") {
              newField["hint"] = helpers.isHintValid(newField)
                ? index.h(
                    "div",
                    null,
                    core.I18n.get(
                      Translations.Translations.CONFIRM_SIGN_UP_LOST_CODE
                    ),
                    " ",
                    index.h(
                      "amplify-button",
                      {
                        variant: "anchor",
                        onClick: () => this.resendConfirmCode(),
                      },
                      core.I18n.get(
                        Translations.Translations.CONFIRM_SIGN_UP_RESEND_CODE
                      )
                    )
                  )
                : newField["hint"];
            }
            newField["handleInputChange"] = (event) =>
              this.handleFormFieldInputWithCallback(event, field);
            newFields.push(newField);
          });
          this.newFormFields = newFields;
        }
      }
      handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
          case "username":
          case "email":
            return (event) => (this.userInput = event.target.value);
          case "phone_number":
            return (event) =>
              helpers.handlePhoneNumberChange(event, this.phoneNumber);
          case "code":
            return (event) => (this.code = event.target.value);
          default:
            return;
        }
      }
      setFieldValue(field) {
        switch (field.type) {
          case "username":
          case "email":
            if (field.value === undefined) {
              this.userInput = "";
            } else {
              this.userInput = field.value;
            }
            break;
          case "phone_number":
            if (field.dialCode) {
              this.phoneNumber.countryDialCodeValue = field.dialCode;
            }
            this.phoneNumber.phoneNumberValue = field.value;
            break;
        }
      }
      handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field["handleInputChange"]
          ? field["handleInputChange"]
          : (event, cb) => {
              cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
      }
      /**
       * Returns the username of the user to confirm. If a valid `user.username` has been passed as a prop, we return that.
       * Otherwise, we return the `userInput` on the form.
       */
      getUsername() {
        if (this.user && this.user.username) return this.user.username;
        switch (this.usernameAlias) {
          case "username":
          case "email":
            return this.userInput;
          case "phone_number":
            return helpers.composePhoneNumberInput(this.phoneNumber);
        }
      }
      async resendConfirmCode() {
        if (event) {
          event.preventDefault();
        }
        if (!Auth.Auth || typeof Auth.Auth.resendSignUp !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        try {
          const username = this.getUsername();
          if (!username)
            throw new Error(Translations.Translations.EMPTY_USERNAME);
          await Auth.Auth.resendSignUp(username.trim());
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        }
      }
      // TODO: Add validation
      // TODO: Prefix
      async confirmSignUp(event) {
        if (event) {
          event.preventDefault();
        }
        if (!Auth.Auth || typeof Auth.Auth.confirmSignUp !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          let username = this.getUsername();
          if (!username)
            throw new Error(Translations.Translations.EMPTY_USERNAME);
          username = username.trim();
          const confirmSignUpResult = await Auth.Auth.confirmSignUp(
            username,
            this.code
          );
          if (!confirmSignUpResult) {
            throw new Error(
              core.I18n.get(Translations.Translations.CONFIRM_SIGN_UP_FAILED)
            );
          }
          if (
            this._signUpAttrs &&
            this._signUpAttrs.password &&
            this._signUpAttrs.password !== ""
          ) {
            // Auto sign in user if password is available from previous workflow
            await authHelpers.handleSignIn(
              username,
              this._signUpAttrs.password,
              this.handleAuthStateChange
            );
          } else {
            this.handleAuthStateChange(authTypes.AuthState.SignIn);
          }
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        } finally {
          this.loading = false;
        }
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              submitButtonText: core.I18n.get(this.submitButtonText),
              handleSubmit: this.handleSubmit,
              loading: this.loading,
              secondaryFooterContent: index.h(
                "div",
                null,
                index.h(
                  "span",
                  null,
                  index.h(
                    "amplify-button",
                    {
                      variant: "anchor",
                      onClick: () =>
                        this.handleAuthStateChange(authTypes.AuthState.SignIn),
                    },
                    core.I18n.get(Translations.Translations.BACK_TO_SIGN_IN)
                  )
                )
              ),
            },
            index.h("amplify-auth-fields", { formFields: this.newFormFields })
          )
        );
      }
      static get watchers() {
        return {
          formFields: ["formFieldsHandler"],
          user: ["userHandler"],
        };
      }
    };

    const logger = new core.Logger("ForgotPassword");
    const AmplifyForgotPassword = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = Translations.Translations.RESET_YOUR_PASSWORD;
        /** The text displayed inside of the send code button for the form */
        this.sendButtonText = Translations.Translations.SEND_CODE;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText = Translations.Translations.SUBMIT;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [];
        /** The function called when making a request to reset password */
        this.handleSend = (event) => this.send(event);
        /** The function called when submitting a new password */
        this.handleSubmit = (event) => this.submit(event);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = "username";
        this.delivery = null;
        this.loading = false;
        this.phoneNumber = {
          countryDialCodeValue: constants.COUNTRY_DIAL_CODE_DEFAULT,
          phoneNumberValue: null,
        };
        this.newFormFields = [];
        this.forgotPasswordAttrs = {
          userInput: "",
          password: "",
          code: "",
        };
      }
      componentWillLoad() {
        helpers.checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
      }
      formFieldsHandler() {
        this.buildFormFields();
      }
      buildFormFields() {
        if (this.formFields.length === 0) {
          this.buildDefaultFormFields();
        } else {
          const newFields = [];
          this.formFields.forEach((field) => {
            const newField = Object.assign({}, field);
            newField["handleInputChange"] = (event) =>
              this.handleFormFieldInputWithCallback(event, field);
            newFields.push(newField);
          });
          this.newFormFields = newFields;
        }
      }
      buildDefaultFormFields() {
        switch (this.usernameAlias) {
          case "email":
            this.newFormFields = [
              {
                type: "email",
                required: true,
                handleInputChange: this.handleFormFieldInputChange("email"),
                inputProps: {
                  "data-test": "forgot-password-email-input",
                },
              },
            ];
            break;
          case "phone_number":
            this.newFormFields = [
              {
                type: "phone_number",
                required: true,
                handleInputChange:
                  this.handleFormFieldInputChange("phone_number"),
                inputProps: {
                  "data-test": "forgot-password-phone-number-input",
                },
              },
            ];
            break;
          case "username":
          default:
            this.newFormFields = [
              {
                type: "username",
                required: true,
                handleInputChange: this.handleFormFieldInputChange("username"),
                inputProps: {
                  "data-test": "forgot-password-username-input",
                },
              },
            ];
            break;
        }
      }
      handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
          case "username":
          case "email":
            return (event) =>
              (this.forgotPasswordAttrs.userInput = event.target.value);
          case "phone_number":
            return (event) =>
              helpers.handlePhoneNumberChange(event, this.phoneNumber);
          case "password":
          case "code":
            return (event) =>
              (this.forgotPasswordAttrs[fieldType] = event.target.value);
          default:
            return;
        }
      }
      setFieldValue(field, formAttributes) {
        switch (field.type) {
          case "username":
          case "email":
            if (field.value === undefined) {
              formAttributes.userInput = "";
            } else {
              formAttributes.userInput = field.value;
            }
            break;
          case "phone_number":
            if (field.dialCode) {
              this.phoneNumber.countryDialCodeValue = field.dialCode;
            }
            this.phoneNumber.phoneNumberValue = field.value;
            break;
          case "password":
          case "code":
            if (field.value === undefined) {
              formAttributes[field.type] = "";
            } else {
              formAttributes[field.type] = field.value;
            }
            break;
        }
      }
      handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field["handleInputChange"]
          ? field["handleInputChange"]
          : (event, cb) => {
              cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
      }
      async send(event) {
        if (event) {
          event.preventDefault();
        }
        if (!Auth.Auth || typeof Auth.Auth.forgotPassword !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        switch (this.usernameAlias) {
          case "phone_number":
            try {
              this.forgotPasswordAttrs.userInput =
                helpers.composePhoneNumberInput(this.phoneNumber);
            } catch (error) {
              helpers.dispatchToastHubEvent(error);
            }
            break;
        }
        try {
          const data = await Auth.Auth.forgotPassword(
            this.forgotPasswordAttrs.userInput.trim()
          );
          logger.debug(data);
          this.newFormFields = [
            {
              type: "code",
              required: true,
              handleInputChange: this.handleFormFieldInputChange("code"),
              inputProps: {
                "data-test": "forgot-password-code-input",
              },
            },
            {
              type: "password",
              required: true,
              handleInputChange: this.handleFormFieldInputChange("password"),
              label: core.I18n.get(
                Translations.Translations.NEW_PASSWORD_LABEL
              ),
              placeholder: core.I18n.get(
                Translations.Translations.NEW_PASSWORD_PLACEHOLDER
              ),
            },
          ];
          this.delivery = data.CodeDeliveryDetails;
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        } finally {
          this.loading = false;
        }
      }
      async submit(event) {
        if (event) {
          event.preventDefault();
        }
        if (
          !Auth.Auth ||
          typeof Auth.Auth.forgotPasswordSubmit !== "function"
        ) {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          const { userInput, code, password } = this.forgotPasswordAttrs;
          const data = await Auth.Auth.forgotPasswordSubmit(
            userInput.trim(),
            code,
            password
          );
          logger.debug(data);
          this.handleAuthStateChange(authTypes.AuthState.SignIn);
          this.delivery = null;
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        } finally {
          this.loading = false;
        }
      }
      render() {
        const submitFn = this.delivery
          ? (event) => this.handleSubmit(event)
          : (event) => this.handleSend(event);
        const submitButtonText = this.delivery
          ? this.submitButtonText
          : this.sendButtonText;
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              handleSubmit: submitFn,
              loading: this.loading,
              secondaryFooterContent: index.h(
                "amplify-button",
                {
                  variant: "anchor",
                  onClick: () =>
                    this.handleAuthStateChange(authTypes.AuthState.SignIn),
                  "data-test": "forgot-password-back-to-sign-in-link",
                },
                core.I18n.get(Translations.Translations.BACK_TO_SIGN_IN)
              ),
              testDataPrefix: "forgot-password",
              submitButtonText: core.I18n.get(submitButtonText),
            },
            index.h("amplify-auth-fields", { formFields: this.newFormFields })
          )
        );
      }
      static get watchers() {
        return {
          formFields: ["formFieldsHandler"],
        };
      }
    };

    const logger$1 = new core.ConsoleLogger("amplify-require-new-password");
    const AmplifyRequireNewPassword = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The header text of the forgot password section */
        this.headerText = Translations.Translations.CHANGE_PASSWORD;
        /** The text displayed inside of the submit button for the form */
        this.submitButtonText =
          Translations.Translations.CHANGE_PASSWORD_ACTION;
        /** The function called when submitting a new password */
        this.handleSubmit = (event) => this.completeNewPassword(event);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** The form fields displayed inside of the forgot password form */
        this.formFields = [
          {
            type: authTypes.AuthFormField.Password,
            required: true,
            handleInputChange: (event) => this.handlePasswordChange(event),
            label: core.I18n.get(Translations.Translations.NEW_PASSWORD_LABEL),
            placeholder: core.I18n.get(
              Translations.Translations.NEW_PASSWORD_PLACEHOLDER
            ),
            inputProps: {
              "data-test": "require-new-password-password-input",
            },
          },
        ];
        this.loading = false;
        this.requiredAttributes = {};
        this.newFormFields = this.formFields;
        this.phoneNumber = {
          countryDialCodeValue: constants.COUNTRY_DIAL_CODE_DEFAULT,
          phoneNumberValue: " ",
        };
      }
      userHandler() {
        this.setCurrentUser();
      }
      handleRequiredAttributeInputChange(attribute, event) {
        if (attribute === "phone_number") {
          this.formatPhoneNumber(event);
        } else {
          this.requiredAttributes[attribute] = event.target.value;
        }
      }
      async setCurrentUser() {
        if (!this.user) {
          // Check for authenticated user
          try {
            const user = await Auth.Auth.currentAuthenticatedUser();
            if (user) this.currentUser = user;
          } catch (error) {
            helpers.dispatchToastHubEvent(error);
          }
        } else {
          this.currentUser = this.user;
        }
        if (
          this.currentUser &&
          this.currentUser.challengeParam &&
          this.currentUser.challengeParam.requiredAttributes
        ) {
          const userRequiredAttributes =
            this.currentUser.challengeParam.requiredAttributes;
          const requiredAttributesMap = helpers.getRequiredAttributesMap();
          userRequiredAttributes.forEach((attribute) => {
            const formField = {
              type: attribute,
              required: true,
              label: requiredAttributesMap[attribute].label,
              placeholder: requiredAttributesMap[attribute].placeholder,
              handleInputChange: (event) =>
                this.handleRequiredAttributeInputChange(attribute, event),
              inputProps: {
                "data-test": `require-new-password-${attribute}-input`,
              },
            };
            this.newFormFields = [...this.newFormFields, formField];
          });
        }
      }
      componentWillLoad() {
        return this.setCurrentUser();
      }
      handlePasswordChange(event) {
        this.password = event.target.value;
      }
      formatPhoneNumber(event) {
        helpers.handlePhoneNumberChange(event, this.phoneNumber);
        /**
         * composePhoneNumberInput will throw an error if the phoneNumberValue it receives
         * is empty. Adding a check here to try and make sure that doesn't happen...but will
         * wrap it in a try/catch block just in case as well
         */
        try {
          if (
            event.target.name === constants.PHONE_SUFFIX &&
            this.phoneNumber.phoneNumberValue
          ) {
            const composedInput = helpers.composePhoneNumberInput(
              this.phoneNumber
            );
            this.requiredAttributes["phone_number"] = composedInput;
          }
        } catch (err) {
          logger$1.error(`error in phone number field - ${err}`);
        }
      }
      async completeNewPassword(event) {
        if (event) {
          event.preventDefault();
        }
        if (!Auth.Auth || typeof Auth.Auth.completeNewPassword !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          const user = await Auth.Auth.completeNewPassword(
            this.currentUser,
            this.password,
            this.requiredAttributes
          );
          logger$1.debug("complete new password", user);
          switch (user.challengeName) {
            case authTypes.ChallengeName.SMSMFA:
              this.handleAuthStateChange(
                authTypes.AuthState.ConfirmSignIn,
                user
              );
              break;
            case authTypes.ChallengeName.MFASetup:
              logger$1.debug("TOTP setup", user.challengeParam);
              this.handleAuthStateChange(authTypes.AuthState.TOTPSetup, user);
              break;
            default:
              await authHelpers.checkContact(user, this.handleAuthStateChange);
          }
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        } finally {
          this.loading = false;
        }
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              handleSubmit: this.handleSubmit,
              loading: this.loading,
              secondaryFooterContent: index.h(
                "amplify-button",
                {
                  variant: "anchor",
                  onClick: () =>
                    this.handleAuthStateChange(authTypes.AuthState.SignIn),
                },
                core.I18n.get(Translations.Translations.BACK_TO_SIGN_IN)
              ),
              submitButtonText: core.I18n.get(this.submitButtonText),
            },
            index.h("amplify-auth-fields", { formFields: this.newFormFields })
          )
        );
      }
      static get watchers() {
        return {
          user: ["userHandler"],
        };
      }
    };

    const amplifySignInCss =
      ":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";

    const AmplifySignIn = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Fires when sign in form is submitted */
        this.handleSubmit = (event) => this.signIn(event);
        /** Used for header text in sign in component */
        this.headerText = Translations.Translations.SIGN_IN_HEADER_TEXT;
        /** Used for the submit button text in sign in component */
        this.submitButtonText = Translations.Translations.SIGN_IN_ACTION;
        /** Auth state change handler for this component */
        // prettier-ignore
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = "username";
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Hides the sign up link */
        this.hideSignUp = false;
        this.newFormFields = [];
        /* Whether or not the sign-in component is loading */
        this.loading = false;
        this.phoneNumber = {
          countryDialCodeValue: constants.COUNTRY_DIAL_CODE_DEFAULT,
          phoneNumberValue: null,
        };
        this.signInAttributes = {
          userInput: "",
          password: "",
        };
      }
      componentWillLoad() {
        helpers.checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
      }
      formFieldsHandler() {
        this.buildFormFields();
      }
      handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
          case "username":
          case "email":
            return (event) =>
              (this.signInAttributes.userInput = event.target.value);
          case "phone_number":
            return (event) =>
              helpers.handlePhoneNumberChange(event, this.phoneNumber);
          case "password":
            return (event) =>
              (this.signInAttributes.password = event.target.value);
          default:
            return () => {};
        }
      }
      handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field["handleInputChange"]
          ? field["handleInputChange"]
          : (event, cb) => {
              cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
      }
      async signIn(event) {
        // avoid submitting the form
        if (event) {
          event.preventDefault();
        }
        this.loading = true;
        switch (this.usernameAlias) {
          case "phone_number":
            try {
              this.signInAttributes.userInput = helpers.composePhoneNumberInput(
                this.phoneNumber
              );
            } catch (error) {
              helpers.dispatchToastHubEvent(error);
            }
        }
        const username = this.signInAttributes.userInput.trim();
        await authHelpers.handleSignIn(
          username,
          this.signInAttributes.password,
          this.handleAuthStateChange,
          this.usernameAlias
        );
        this.loading = false;
      }
      buildDefaultFormFields() {
        const formFieldInputs = [];
        switch (this.usernameAlias) {
          case "email":
            formFieldInputs.push({
              type: "email",
              required: true,
              handleInputChange: this.handleFormFieldInputChange("email"),
              inputProps: {
                "data-test": "sign-in-email-input",
                autocomplete: "username",
              },
            });
            break;
          case "phone_number":
            formFieldInputs.push({
              type: "phone_number",
              required: true,
              handleInputChange:
                this.handleFormFieldInputChange("phone_number"),
              inputProps: {
                "data-test": "sign-in-phone-number-input",
                autocomplete: "username",
              },
            });
            break;
          case "username":
          default:
            formFieldInputs.push({
              type: "username",
              required: true,
              handleInputChange: this.handleFormFieldInputChange("username"),
              inputProps: {
                "data-test": "sign-in-username-input",
                autocomplete: "username",
              },
            });
            break;
        }
        formFieldInputs.push({
          type: "password",
          hint: index.h(
            "div",
            null,
            core.I18n.get(Translations.Translations.FORGOT_PASSWORD_TEXT),
            " ",
            index.h(
              "amplify-button",
              {
                variant: "anchor",
                onClick: () =>
                  this.handleAuthStateChange(
                    authTypes.AuthState.ForgotPassword
                  ),
                "data-test": "sign-in-forgot-password-link",
              },
              core.I18n.get(Translations.Translations.RESET_PASSWORD_TEXT)
            )
          ),
          required: true,
          handleInputChange: this.handleFormFieldInputChange("password"),
          inputProps: {
            "data-test": "sign-in-password-input",
          },
        });
        this.newFormFields = [...formFieldInputs];
      }
      buildFormFields() {
        if (this.formFields.length === 0) {
          this.buildDefaultFormFields();
        } else {
          const newFields = [];
          this.formFields.forEach((field) => {
            const newField = Object.assign({}, field);
            // TODO: handle hint better
            if (newField.type === "password") {
              newField["hint"] = helpers.isHintValid(newField)
                ? index.h(
                    "div",
                    null,
                    core.I18n.get(
                      Translations.Translations.FORGOT_PASSWORD_TEXT
                    ),
                    " ",
                    index.h(
                      "amplify-button",
                      {
                        variant: "anchor",
                        onClick: () =>
                          this.handleAuthStateChange(
                            authTypes.AuthState.ForgotPassword
                          ),
                        "data-test": "sign-in-forgot-password-link",
                      },
                      core.I18n.get(
                        Translations.Translations.RESET_PASSWORD_TEXT
                      )
                    )
                  )
                : newField["hint"];
            }
            newField["handleInputChange"] = (event) =>
              this.handleFormFieldInputWithCallback(event, field);
            this.setFieldValue(newField, this.signInAttributes);
            newFields.push(newField);
          });
          this.newFormFields = newFields;
        }
      }
      setFieldValue(field, formAttributes) {
        switch (field.type) {
          case "username":
          case "email":
            if (field.value === undefined) {
              formAttributes.userInput = "";
            } else {
              formAttributes.userInput = field.value;
            }
            break;
          case "phone_number":
            if (field.dialCode) {
              this.phoneNumber.countryDialCodeValue = field.dialCode;
            }
            this.phoneNumber.phoneNumberValue = field.value;
            break;
          case "password":
            if (field.value === undefined) {
              formAttributes.password = "";
            } else {
              formAttributes.password = field.value;
            }
            break;
        }
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              handleSubmit: this.handleSubmit,
              testDataPrefix: "sign-in",
            },
            index.h(
              "div",
              { slot: "subtitle" },
              index.h("slot", { name: "header-subtitle" })
            ),
            index.h(
              "slot",
              { name: "federated-buttons" },
              index.h("amplify-federated-buttons", {
                handleAuthStateChange: this.handleAuthStateChange,
                federated: this.federated,
              })
            ),
            !core.isEmpty(this.federated) &&
              index.h("amplify-strike", null, "or"),
            index.h("amplify-auth-fields", { formFields: this.newFormFields }),
            index.h(
              "div",
              {
                slot: "amplify-form-section-footer",
                class: "sign-in-form-footer",
              },
              index.h(
                "slot",
                { name: "footer" },
                !this.hideSignUp &&
                  index.h(
                    "slot",
                    { name: "secondary-footer-content" },
                    index.h(
                      "span",
                      null,
                      core.I18n.get(Translations.Translations.NO_ACCOUNT_TEXT),
                      " ",
                      index.h(
                        "amplify-button",
                        {
                          variant: "anchor",
                          onClick: () =>
                            this.handleAuthStateChange(
                              authTypes.AuthState.SignUp
                            ),
                          "data-test": "sign-in-create-account-link",
                        },
                        core.I18n.get(
                          Translations.Translations.CREATE_ACCOUNT_TEXT
                        )
                      )
                    )
                  ),
                index.h(
                  "div",
                  { class: this.hideSignUp ? "full-width-footer-content" : "" },
                  index.h(
                    "slot",
                    { name: "primary-footer-content" },
                    index.h(
                      "amplify-button",
                      {
                        type: "submit",
                        disabled: this.loading,
                        "data-test": "sign-in-sign-in-button",
                      },
                      this.loading
                        ? index.h("amplify-loading-spinner", null)
                        : index.h(
                            "span",
                            null,
                            core.I18n.get(this.submitButtonText)
                          )
                    )
                  )
                )
              )
            )
          )
        );
      }
      static get watchers() {
        return {
          formFields: ["formFieldsHandler"],
        };
      }
    };
    AmplifySignIn.style = amplifySignInCss;

    const amplifySignUpCss =
      "amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";

    const AmplifySignUp = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Fires when sign up form is submitted */
        this.handleSubmit = (event) => this.signUp(event);
        /** Override for handling the Auth.SignUp API call */
        this.handleSignUp = (params) => this.authSignUp(params);
        /** Used for header text in sign up component */
        this.headerText = Translations.Translations.SIGN_UP_HEADER_TEXT;
        /** Used for the submit button text in sign up component */
        this.submitButtonText =
          Translations.Translations.SIGN_UP_SUBMIT_BUTTON_TEXT;
        /** Used for the submit button text in sign up component */
        this.haveAccountText =
          Translations.Translations.SIGN_UP_HAVE_ACCOUNT_TEXT;
        /** Text used for the sign in hyperlink */
        this.signInText = Translations.Translations.SIGN_IN_TEXT;
        /**
         * Form fields allows you to utilize our pre-built components such as username field, code field, password field, email field, etc.
         * by passing an array of strings that you would like the order of the form to be in. If you need more customization, such as changing
         * text for a label or adjust a placeholder, you can follow the structure below in order to do just that.
         * ```
         * [
         *  {
         *    type: string,
         *    label: string,
         *    placeholder: string,
         *    hint: string | Functional Component | null,
         *    required: boolean
         *  }
         * ]
         * ```
         */
        this.formFields = [];
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        // prettier-ignore
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Username Alias is used to setup authentication with `username`, `email` or `phone_number`  */
        this.usernameAlias = "username";
        // private userInput: string | PhoneNumberInterface;
        this.newFormFields = [];
        this.phoneNumber = {
          countryDialCodeValue: constants.COUNTRY_DIAL_CODE_DEFAULT,
          phoneNumberValue: null,
        };
        this.loading = false;
        this.signUpAttributes = {
          username: "",
          password: "",
          attributes: {},
        };
      }
      handleFormFieldInputChange(fieldType) {
        switch (fieldType) {
          case "username":
            return (event) =>
              (this.signUpAttributes.username = event.target.value);
          case "password":
            return (event) =>
              (this.signUpAttributes.password = event.target.value);
          case "email":
            return (event) =>
              (this.signUpAttributes.attributes.email = event.target.value);
          case "phone_number":
            return (event) =>
              helpers.handlePhoneNumberChange(event, this.phoneNumber);
          default:
            return (event) =>
              (this.signUpAttributes.attributes[fieldType] =
                event.target.value);
        }
      }
      handleFormFieldInputWithCallback(event, field) {
        const fnToCall = field["handleInputChange"]
          ? field["handleInputChange"]
          : (event, cb) => {
              cb(event);
            };
        const callback = this.handleFormFieldInputChange(field.type);
        fnToCall(event, callback.bind(this));
      }
      async authSignUp(params) {
        const data = await Auth.Auth.signUp(params);
        if (!data) {
          throw new Error(Translations.Translations.SIGN_UP_FAILED);
        }
        return data;
      }
      assignPhoneNumberToSignUpAttributes() {
        if (this.phoneNumber.phoneNumberValue) {
          try {
            this.signUpAttributes.attributes.phone_number =
              helpers.composePhoneNumberInput(this.phoneNumber);
          } catch (error) {
            helpers.dispatchToastHubEvent(error);
          }
        }
      }
      assignUserNameAliasToSignUpAttributes() {
        switch (this.usernameAlias) {
          case "email":
          case "phone_number":
            this.signUpAttributes.username =
              this.signUpAttributes.attributes[this.usernameAlias];
            break;
        }
      }
      assignFormInputToSignUpAttributes() {
        this.assignPhoneNumberToSignUpAttributes();
        this.assignUserNameAliasToSignUpAttributes();
      }
      validateSignUpAttributes() {
        if (!this.signUpAttributes.username) {
          if (this.usernameAlias === authTypes.UsernameAlias.email) {
            throw new Error(Translations.Translations.EMPTY_EMAIL);
          } else if (
            this.usernameAlias === authTypes.UsernameAlias.phone_number
          ) {
            throw new Error(Translations.Translations.EMPTY_PHONE);
          } else {
            throw new Error(Translations.Translations.EMPTY_USERNAME);
          }
        }
        if (this.signUpAttributes.username.indexOf(" ") >= 0) {
          throw new Error(Translations.Translations.USERNAME_REMOVE_WHITESPACE);
        }
        if (
          this.signUpAttributes.password !==
          this.signUpAttributes.password.trim()
        ) {
          throw new Error(Translations.Translations.PASSWORD_REMOVE_WHITESPACE);
        }
      }
      // TODO: Add validation
      // TODO: Prefix
      async signUp(event) {
        if (event) {
          event.preventDefault();
        }
        if (!Auth.Auth || typeof Auth.Auth.signUp !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        this.assignFormInputToSignUpAttributes();
        try {
          this.validateSignUpAttributes();
          const data = await this.handleSignUp(this.signUpAttributes);
          if (data.userConfirmed) {
            await authHelpers.handleSignIn(
              this.signUpAttributes.username,
              this.signUpAttributes.password,
              this.handleAuthStateChange
            );
          } else {
            const signUpAttrs = Object.assign({}, this.signUpAttributes);
            this.handleAuthStateChange(
              authTypes.AuthState.ConfirmSignUp,
              Object.assign(Object.assign({}, data.user), { signUpAttrs })
            );
          }
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        } finally {
          this.loading = false;
        }
      }
      buildDefaultFormFields() {
        switch (this.usernameAlias) {
          case "email":
            this.newFormFields = [
              {
                type: "email",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_EMAIL_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("email"),
                inputProps: {
                  "data-test": "sign-up-email-input",
                  autocomplete: "username",
                },
              },
              {
                type: "password",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_PASSWORD_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("password"),
                inputProps: {
                  "data-test": "sign-up-password-input",
                  autocomplete: "new-password",
                },
              },
              {
                type: "phone_number",
                required: true,
                handleInputChange:
                  this.handleFormFieldInputChange("phone_number"),
                inputProps: {
                  "data-test": "sign-up-phone-number-input",
                  autocomplete: "tel-national",
                },
              },
            ];
            break;
          case "phone_number":
            this.newFormFields = [
              {
                type: "phone_number",
                required: true,
                handleInputChange:
                  this.handleFormFieldInputChange("phone_number"),
                inputProps: {
                  "data-test": "sign-up-phone-number-input",
                  autocomplete: "username",
                },
              },
              {
                type: "password",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_PASSWORD_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("password"),
                inputProps: {
                  "data-test": "sign-up-password-input",
                  autocomplete: "new-password",
                },
              },
              {
                type: "email",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_EMAIL_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("email"),
                inputProps: {
                  "data-test": "sign-up-email-input",
                  autocomplete: "email",
                },
              },
            ];
            break;
          case "username":
          default:
            this.newFormFields = [
              {
                type: "username",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_USERNAME_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("username"),
                inputProps: {
                  "data-test": "sign-up-username-input",
                  autocomplete: "username",
                },
              },
              {
                type: "password",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_PASSWORD_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("password"),
                inputProps: {
                  "data-test": "sign-up-password-input",
                  autocomplete: "new-password",
                },
              },
              {
                type: "email",
                placeholder: core.I18n.get(
                  Translations.Translations.SIGN_UP_EMAIL_PLACEHOLDER
                ),
                required: true,
                handleInputChange: this.handleFormFieldInputChange("email"),
                inputProps: {
                  "data-test": "sign-up-email-input",
                },
              },
              {
                type: "phone_number",
                required: true,
                handleInputChange:
                  this.handleFormFieldInputChange("phone_number"),
                inputProps: {
                  "data-test": "sign-up-phone-number-input",
                },
              },
            ];
            break;
        }
      }
      buildFormFields() {
        if (this.formFields.length === 0) {
          this.buildDefaultFormFields();
        } else {
          const newFields = [];
          this.formFields.forEach((field) => {
            const newField = Object.assign({}, field);
            newField["handleInputChange"] = (event) =>
              this.handleFormFieldInputWithCallback(event, field);
            this.setFieldValue(field, this.signUpAttributes);
            newFields.push(newField);
          });
          this.newFormFields = newFields;
        }
      }
      setFieldValue(field, formAttributes) {
        switch (field.type) {
          case "username":
            if (field.value === undefined) {
              formAttributes.username = "";
            } else {
              formAttributes.username = field.value;
            }
            break;
          case "password":
            if (field.value === undefined) {
              formAttributes.password = "";
            } else {
              formAttributes.password = field.value;
            }
            break;
          case "email":
            formAttributes.attributes.email = field.value;
            break;
          case "phone_number":
            if (field.dialCode) {
              this.phoneNumber.countryDialCodeValue = field.dialCode;
            }
            this.phoneNumber.phoneNumberValue = field.value;
            break;
          default:
            formAttributes.attributes[field.type] = field.value;
            break;
        }
      }
      componentWillLoad() {
        helpers.checkUsernameAlias(this.usernameAlias);
        this.buildFormFields();
      }
      formFieldsHandler() {
        this.buildFormFields();
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              handleSubmit: this.handleSubmit,
              testDataPrefix: "sign-up",
            },
            index.h(
              "div",
              { slot: "subtitle" },
              index.h("slot", { name: "header-subtitle" })
            ),
            index.h("amplify-auth-fields", { formFields: this.newFormFields }),
            index.h(
              "div",
              {
                class: "sign-up-form-footer",
                slot: "amplify-form-section-footer",
              },
              index.h(
                "slot",
                { name: "footer" },
                index.h(
                  "slot",
                  { name: "secondary-footer-content" },
                  index.h(
                    "span",
                    null,
                    core.I18n.get(this.haveAccountText),
                    " ",
                    index.h(
                      "amplify-button",
                      {
                        variant: "anchor",
                        onClick: () =>
                          this.handleAuthStateChange(
                            authTypes.AuthState.SignIn
                          ),
                        "data-test": "sign-up-sign-in-link",
                      },
                      core.I18n.get(this.signInText)
                    )
                  )
                ),
                index.h(
                  "slot",
                  { name: "primary-footer-content" },
                  index.h(
                    "amplify-button",
                    {
                      type: "submit",
                      "data-test": "sign-up-create-account-button",
                      disabled: this.loading,
                    },
                    this.loading
                      ? index.h("amplify-loading-spinner", null)
                      : index.h(
                          "span",
                          null,
                          core.I18n.get(this.submitButtonText)
                        )
                  )
                )
              )
            )
          )
        );
      }
      static get watchers() {
        return {
          formFields: ["formFieldsHandler"],
        };
      }
    };
    AmplifySignUp.style = amplifySignUpCss;

    const logger$2 = new core.Logger("AmplifyVerifyContact");
    const AmplifyVerifyContact = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Authentication state handler */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        this.loading = false;
      }
      handleSubmit(event) {
        event.preventDefault();
        this.verifyAttr ? this.submit(this.code) : this.verify(this.contact);
      }
      async submit(code) {
        const attr = this.verifyAttr;
        if (
          !Auth.Auth ||
          typeof Auth.Auth.verifyCurrentUserAttributeSubmit !== "function"
        ) {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          const data = await Auth.Auth.verifyCurrentUserAttributeSubmit(
            attr,
            code
          );
          logger$2.debug(data);
          this.handleAuthStateChange(authTypes.AuthState.SignedIn, this.user);
          this.verifyAttr = null;
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
          logger$2.error(error);
        } finally {
          this.loading = false;
        }
      }
      async verify(contact) {
        if (!contact) {
          logger$2.error("Neither Email nor Phone Number selected");
          return;
        }
        if (
          !Auth.Auth ||
          typeof Auth.Auth.verifyCurrentUserAttribute !== "function"
        ) {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          const data = await Auth.Auth.verifyCurrentUserAttribute(contact);
          logger$2.debug(data);
          this.verifyAttr = contact;
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
          logger$2.error(error);
        } finally {
          this.loading = false;
        }
      }
      handleInputChange(event) {
        const inputName = event.target.name;
        if (inputName === "code") {
          this.code = event.target.value;
        } else if (inputName === "contact") {
          this.contact = event.target.value;
        }
      }
      renderSubmit() {
        return index.h(
          "div",
          null,
          index.h("amplify-input", {
            inputProps: {
              autocomplete: "off",
              "data-test": "verify-contact-code-input",
            },
            name: "code",
            placeholder: core.I18n.get(
              Translations.Translations.CODE_PLACEHOLDER
            ),
            handleInputChange: (event) => this.handleInputChange(event),
          })
        );
      }
      renderVerify() {
        const user = this.user;
        if (!user) {
          logger$2.debug("No user to verify");
          return null;
        }
        const { unverified } = user;
        if (!unverified) {
          logger$2.debug("Unverified variable does not exist on user");
          return null;
        }
        const { email, phone_number } = unverified;
        return index.h(
          "div",
          null,
          email &&
            index.h("amplify-radio-button", {
              label: core.I18n.get(
                Translations.Translations.VERIFY_CONTACT_EMAIL_LABEL
              ),
              key: "email",
              name: "contact",
              value: "email",
              handleInputChange: (event) => this.handleInputChange(event),
              inputProps: {
                "data-test": "verify-contact-email-radio",
              },
            }),
          phone_number &&
            index.h("amplify-radio-button", {
              label: core.I18n.get(
                Translations.Translations.VERIFY_CONTACT_PHONE_LABEL
              ),
              key: "phone_number",
              name: "contact",
              value: "phone_number",
              handleInputChange: (event) => this.handleInputChange(event),
              inputProps: {
                "data-test": "verify-contact-phone-number-radio",
              },
            })
        );
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              handleSubmit: (event) => this.handleSubmit(event),
              headerText: core.I18n.get(
                Translations.Translations.VERIFY_CONTACT_HEADER_TEXT
              ),
              loading: this.loading,
              secondaryFooterContent: index.h(
                "span",
                null,
                index.h(
                  "amplify-button",
                  {
                    variant: "anchor",
                    onClick: () =>
                      this.handleAuthStateChange(
                        authTypes.AuthState.SignedIn,
                        this.user
                      ),
                    "data-test": "verify-contact-skip-link",
                  },
                  core.I18n.get(Translations.Translations.SKIP)
                )
              ),
              submitButtonText: this.verifyAttr
                ? core.I18n.get(
                    Translations.Translations.VERIFY_CONTACT_SUBMIT_LABEL
                  )
                : core.I18n.get(
                    Translations.Translations.VERIFY_CONTACT_VERIFY_LABEL
                  ),
            },
            this.verifyAttr ? this.renderSubmit() : this.renderVerify()
          )
        );
      }
    };

    exports.amplify_confirm_sign_in = AmplifyConfirmSignIn;
    exports.amplify_confirm_sign_up = AmplifyConfirmSignUp;
    exports.amplify_forgot_password = AmplifyForgotPassword;
    exports.amplify_require_new_password = AmplifyRequireNewPassword;
    exports.amplify_sign_in = AmplifySignIn;
    exports.amplify_sign_up = AmplifySignUp;
    exports.amplify_verify_contact = AmplifyVerifyContact;

    /***/
  },

  /***/ 34341: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const amplifyContainerCss =
      "amplify-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100vh}";

    const AmplifyContainer = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h(index.Host, null, index.h("slot", null));
      }
    };
    AmplifyContainer.style = amplifyContainerCss;

    exports.amplify_container = AmplifyContainer;

    /***/
  },

  /***/ 93281: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    const AmplifyFederatedButtons = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The current authentication state. */
        this.authState = authTypes.AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
        /** Auth state change handler for this component
         * e.g. SignIn -> 'Create Account' link -> SignUp
         */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
      }
      componentWillLoad() {
        if (!Auth.Auth || typeof Auth.Auth.configure !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth.Auth.configure();
        // backward compatibility
        if (oauth["domain"]) {
          this.federated.oauthConfig = Object.assign(
            Object.assign({}, this.federated.oauthConfig),
            oauth
          );
        } else if (oauth["awsCognito"]) {
          this.federated.oauthConfig = Object.assign(
            Object.assign({}, this.federated.oauthConfig),
            oauth["awsCognito"]
          );
        }
        if (oauth["auth0"]) {
          this.federated.auth0Config = Object.assign(
            Object.assign({}, this.federated.auth0Config),
            oauth["auth0"]
          );
        }
      }
      render() {
        if (!Object.values(authTypes.AuthState).includes(this.authState)) {
          return null;
        }
        if (core.isEmpty(this.federated)) {
          return null;
        }
        const {
          amazonClientId,
          auth0Config,
          facebookAppId,
          googleClientId,
          oauthConfig,
        } = this.federated;
        return index.h(
          "div",
          null,
          googleClientId &&
            index.h(
              "div",
              null,
              index.h("amplify-google-button", {
                clientId: googleClientId,
                handleAuthStateChange: this.handleAuthStateChange,
              })
            ),
          facebookAppId &&
            index.h(
              "div",
              null,
              index.h("amplify-facebook-button", {
                appId: facebookAppId,
                handleAuthStateChange: this.handleAuthStateChange,
              })
            ),
          amazonClientId &&
            index.h(
              "div",
              null,
              index.h("amplify-amazon-button", {
                clientId: amazonClientId,
                handleAuthStateChange: this.handleAuthStateChange,
              })
            ),
          oauthConfig &&
            index.h(
              "div",
              null,
              index.h("amplify-oauth-button", { config: oauthConfig })
            ),
          auth0Config &&
            index.h(
              "div",
              null,
              index.h("amplify-auth0-button", {
                config: auth0Config,
                handleAuthStateChange: this.handleAuthStateChange,
              })
            )
        );
      }
    };

    const amplifyStrikeCss =
      ".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}";

    const AmplifyStrike = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h(
          "span",
          { class: "strike-content" },
          index.h("slot", null)
        );
      }
    };
    AmplifyStrike.style = amplifyStrikeCss;

    exports.amplify_federated_buttons = AmplifyFederatedButtons;
    exports.amplify_strike = AmplifyStrike;

    /***/
  },

  /***/ 22450: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const constants = __webpack_require__(18524);

    const logger = new core.ConsoleLogger("amplify-federated-sign-in");
    const AmplifyFederatedSignIn = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The current authentication state. */
        this.authState = authTypes.AuthState.SignIn;
        /** Federated credentials & configuration. */
        this.federated = {};
      }
      componentWillLoad() {
        if (!Auth.Auth || typeof Auth.Auth.configure !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        const { oauth = {} } = Auth.Auth.configure();
        // backward compatibility
        if (oauth["domain"]) {
          this.federated.oauth_config = Object.assign(
            Object.assign({}, this.federated.oauth_config),
            oauth
          );
        } else if (oauth["awsCognito"]) {
          this.federated.oauth_config = Object.assign(
            Object.assign({}, this.federated.oauth_config),
            oauth["awsCognito"]
          );
        }
        if (oauth["auth0"]) {
          this.federated.auth0 = Object.assign(
            Object.assign({}, this.federated.auth0),
            oauth["auth0"]
          );
        }
      }
      render() {
        if (!this.federated) {
          logger.debug("federated prop is empty. show nothing");
          logger.debug(
            "federated={google_client_id: , facebook_app_id: , amazon_client_id}"
          );
          return null;
        }
        if (!Object.values(authTypes.AuthState).includes(this.authState)) {
          return null;
        }
        logger.debug("federated Config is", this.federated);
        return index.h(
          "amplify-form-section",
          { "data-test": "federated-sign-in-section" },
          index.h(
            "amplify-section",
            { "data-test": "federated-sign-in-body-section" },
            index.h("amplify-federated-buttons", {
              authState: this.authState,
              "data-test": "federated-sign-in-buttons",
              federated: this.federated,
            })
          )
        );
      }
    };

    exports.amplify_federated_sign_in = AmplifyFederatedSignIn;

    /***/
  },

  /***/ 39569: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    __webpack_require__(4966);
    __webpack_require__(13564);
    __webpack_require__(67375);
    __webpack_require__(45740);
    __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    const amplifyFormFieldCss =
      "amplify-form-field{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";

    const AmplifyFormField = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = "text";
        /** The required flag in order to make an input required prior to submitting a form */
        this.required = false;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = "";
      }
      render() {
        return index.h(
          "div",
          { class: "form-field" },
          this.label &&
            index.h(
              "div",
              { class: "form-field-label" },
              index.h("amplify-label", { htmlFor: this.fieldId }, this.label)
            ),
          this.description &&
            index.h(
              "div",
              {
                id: `${this.fieldId}-description`,
                class: "form-field-description",
                "data-test": "form-field-description",
              },
              this.description
            ),
          index.h(
            "div",
            null,
            index.h(
              "slot",
              { name: "input" },
              index.h("amplify-input", {
                fieldId: this.fieldId,
                description: this.description,
                type: this.type,
                handleInputChange: this.handleInputChange,
                placeholder: this.placeholder,
                name: this.name,
                value: this.value,
                inputProps: this.inputProps,
                disabled: this.disabled,
                required: this.required,
              })
            )
          ),
          this.hint &&
            index.h("amplify-hint", { id: `${this.fieldId}-hint` }, this.hint)
        );
      }
    };
    AmplifyFormField.style = amplifyFormFieldCss;

    const amplifyHintCss =
      ":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";

    const AmplifyHint = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h("div", { class: "hint" }, index.h("slot", null));
      }
    };
    AmplifyHint.style = amplifyHintCss;

    const amplifyInputCss =
      "amplify-input{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}[data-autocompleted]{background-color:#e8f0fe !important}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1;-webkit-box-shadow:none;box-shadow:none}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";

    const AmplifyInput = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The input type.  Can be any HTML input type. */
        this.type = "text";
        /** The callback, called when the input is modified by the user. */
        this.handleInputChange = () => void 0;
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = "";
        /** Whether the input is a required field */
        this.required = false;
        /** Whether the input has been autocompleted */
        this.autoCompleted = false;
      }
      /**
       * Sets the value of this input to the value in autofill input event.
       */
      setAutoCompleteValue(value) {
        const input = this.el.querySelector("input");
        if (!input) return;
        input.value = value;
        // dispatch an input event from this element to the parent form
        input.dispatchEvent(new Event("input"));
        this.autoCompleted = true;
      }
      /**
       * Checks if the target dummy input in `amplify-auth-container` is present have been autofilled.
       * If so, we update this.value with the autofilled value.
       */
      checkAutoCompletion(targetInput) {
        if (!targetInput) return;
        if (targetInput.value) {
          // if value is already set, we set the value directly
          this.setAutoCompleteValue(targetInput.value);
        } else {
          // if value is not set, we start listening for it
          targetInput.addEventListener("input", (e) => {
            const value = e.target.value;
            this.setAutoCompleteValue(value);
          });
        }
      }
      disconnectedCallback() {
        this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
      }
      componentWillLoad() {
        // the below behaviors are only applicable if `amplify-input` is used by `amplify-authenticator`.
        if (!helpers.closestElement("amplify-authenticator", this.el)) return;
        this.removeHubListener = helpers.onAuthUIStateChange(() => {
          /**
           * When we're using slots, autofilled data will persist between different authState,
           * even though input events are not triggered. This ends up in parent components
           * not picking up input values. For now, we're emptying the input on authState change
           * which is the existing behavior.
           */
          const input = this.el.querySelector("input");
          if (input) input.value = "";
          this.autoCompleted = false;
        });
      }
      componentDidLoad() {
        // no-op if this field already has been autofilled or already has an value
        if (this.autoCompleted || this.value) return;
        if (/Firefox/.test(navigator.userAgent)) return; // firefox autofill works
        const container = helpers.closestElement(
          "amplify-auth-container",
          this.el
        );
        const signIn = helpers.closestElement("amplify-sign-in", this.el);
        // only autocomplete if `amplify-auth-container` is present and input is under `sign-in`.
        if (!container || !signIn) return;
        const username = container.querySelector("input[name='username']");
        const password = container.querySelector("input[name='password']");
        if (
          this.name === "username" ||
          this.name === "email" ||
          this.name === "phone"
        ) {
          this.checkAutoCompletion(username);
        } else if (this.name === "password") {
          this.checkAutoCompletion(password);
        }
      }
      render() {
        return index.h(
          index.Host,
          { class: "input-host" },
          index.h(
            "input",
            Object.assign(
              {
                id: this.fieldId,
                "aria-describedby":
                  this.fieldId && this.description
                    ? `${this.fieldId}-description`
                    : null,
                "data-autocompleted": this.autoCompleted,
                type: this.type,
                onInput: (event) => {
                  this.autoCompleted = false;
                  this.handleInputChange(event);
                },
                placeholder: this.placeholder,
                name: this.name,
                class: "input",
                value: this.value,
                disabled: this.disabled,
                required: this.required,
              },
              this.inputProps
            )
          )
        );
      }
      get el() {
        return index.getElement(this);
      }
    };
    AmplifyInput.style = amplifyInputCss;

    const amplifyLabelCss =
      ":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}";

    const AmplifyLabel = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h(
          "label",
          { class: "label", htmlFor: this.htmlFor },
          index.h("slot", null)
        );
      }
    };
    AmplifyLabel.style = amplifyLabelCss;

    exports.amplify_form_field = AmplifyFormField;
    exports.amplify_hint = AmplifyHint;
    exports.amplify_input = AmplifyInput;
    exports.amplify_label = AmplifyLabel;

    /***/
  },

  /***/ 52693: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    __webpack_require__(4966);
    __webpack_require__(13564);
    __webpack_require__(67375);
    __webpack_require__(45740);
    __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    const amplifyGreetingsCss =
      ":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}";

    const AmplifyGreetings = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Username displayed in the greetings */
        this.username = null;
        /** Logo displayed inside of the header */
        this.logo = null;
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
      }
      render() {
        return index.h(
          "header",
          { class: "greetings" },
          index.h(
            "span",
            { class: "logo" },
            index.h(
              "slot",
              { name: "logo" },
              this.logo && index.h("span", null, this.logo)
            )
          ),
          index.h(
            "span",
            { class: "nav" },
            index.h(
              "slot",
              { name: "nav" },
              index.h(
                "amplify-nav",
                null,
                this.username &&
                  index.h(
                    "slot",
                    { name: "greetings-message" },
                    index.h("span", null, "Hello, ", this.username)
                  ),
                index.h("amplify-sign-out", {
                  handleAuthStateChange: this.handleAuthStateChange,
                })
              )
            )
          )
        );
      }
    };
    AmplifyGreetings.style = amplifyGreetingsCss;

    exports.amplify_greetings = AmplifyGreetings;

    /***/
  },

  /***/ 58240: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const amplifyIconButtonCss =
      ":host{--button-color:var(--amplify-secondary-contrast);--button-background-hover:var(--amplify-secondary-color)}.action-button button{position:relative;padding:0;background:none;height:54px;width:54px;cursor:pointer;outline:none;text-decoration:none;border:none;border-radius:30px;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:var(--button-color);fill:currentColor}.action-button button:hover{background-color:var(--button-background-hover);-webkit-box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3);box-shadow:0.3px 0.3px 0.3px rgba(0, 0, 0, 0.3)}.action-button button:hover>.tooltip{display:block}.action-button button:hover>svg{-webkit-filter:none;filter:none}.action-button button:focus{outline:none}.action-button button svg{width:1.8em;height:1.8em;-webkit-filter:drop-shadow(1px 1px 1px var(--amplify-grey));filter:drop-shadow(1px 1px 1px var(--amplify-grey))}";

    const AmplifyIconButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** (Optional) The tooltip that will show on hover of the button */
        this.tooltip = null;
        /** (Optional) Whether or not to show the tooltip automatically */
        this.autoShowTooltip = false;
      }
      render() {
        return index.h(
          "span",
          { class: "action-button" },
          index.h(
            "amplify-tooltip",
            { text: this.tooltip, shouldAutoShow: this.autoShowTooltip },
            index.h(
              "button",
              null,
              index.h("amplify-icon", { name: this.name })
            )
          )
        );
      }
    };
    AmplifyIconButton.style = amplifyIconButtonCss;

    exports.amplify_icon_button = AmplifyIconButton;

    /***/
  },

  /***/ 88951: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const icons = __webpack_require__(24355);

    const amplifyIconCss =
      ".sc-amplify-icon-h{--width:auto;--height:auto;--icon-fill-color:var(--amplify-white)}svg.sc-amplify-icon{fill:var(--icon-fill-color);width:var(--width);height:var(--height)}";

    const AmplifyIcon = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      validateName(newValue) {
        const isBlank = typeof newValue == null;
        if (isBlank) {
          throw new Error("name: required");
        }
      }
      // https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
      render() {
        return icons.icons[this.name]();
      }
      static get watchers() {
        return {
          name: ["validateName"],
        };
      }
    };
    AmplifyIcon.style = amplifyIconCss;

    exports.amplify_icon = AmplifyIcon;

    /***/
  },

  /***/ 41221: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const amplifyLinkCss =
      ":host{--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade)}.link{color:var(--link-color);cursor:pointer}.link:link{color:var(--link-color);text-decoration:none}.link:hover{color:var(--link-hover);text-decoration:underline}.link:active{color:var(--link-active);text-decoration:underline}";

    const AmplifyLink = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The link role is used to identify an element that creates a hyperlink to a resource that is in the application or external */
        this.role = "navigation";
      }
      render() {
        return index.h(
          "a",
          { class: "link", role: this.role },
          index.h("slot", null)
        );
      }
      get el() {
        return index.getElement(this);
      }
    };
    AmplifyLink.style = amplifyLinkCss;

    exports.amplify_link = AmplifyLink;

    /***/
  },

  /***/ 2580: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    const amplifyNavCss =
      ".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";

    const AmplifyNav = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h("nav", { class: "nav" }, index.h("slot", null));
      }
    };
    AmplifyNav.style = amplifyNavCss;

    const AmplifySignOut = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Text inside of the Sign Out button */
        this.buttonText = Translations.Translations.SIGN_OUT;
      }
      async signOut(event) {
        if (event) event.preventDefault();
        // TODO: Federated Sign Out
        if (!Auth.Auth || typeof Auth.Auth.signOut !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        try {
          await Auth.Auth.signOut();
          this.handleAuthStateChange(authTypes.AuthState.SignedOut);
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        }
      }
      render() {
        return index.h(
          "amplify-button",
          {
            slot: "sign-out",
            onClick: (event) => this.signOut(event),
            "data-test": "sign-out-button",
          },
          core.I18n.get(this.buttonText)
        );
      }
    };

    exports.amplify_nav = AmplifyNav;
    exports.amplify_sign_out = AmplifySignOut;

    /***/
  },

  /***/ 83807: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);

    const amplifyPhotoPickerCss =
      ":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}";

    const AmplifyPhotoPicker = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Title string value */
        this.headerTitle = Translations.Translations.PHOTO_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.Translations.PHOTO_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint =
          Translations.Translations.PHOTO_PICKER_PLACEHOLDER_HINT;
        /** Picker button text as string */
        this.buttonText = Translations.Translations.PHOTO_PICKER_BUTTON_TEXT;
        /** Function that handles file pick onClick */
        this.handleClick = () => {};
        this.handleInput = (ev) => {
          this.file = ev.target.files[0];
          const reader = new FileReader();
          reader.onload = (_e) => {
            const url = reader.result;
            this.previewState = url;
          };
          reader.readAsDataURL(this.file);
        };
      }
      componentWillLoad() {
        this.previewState = this.previewSrc;
      }
      render() {
        return index.h(
          "div",
          { class: "photo-picker-container" },
          index.h(
            "amplify-section",
            null,
            index.h(
              "div",
              { class: "header" },
              core.I18n.get(this.headerTitle)
            ),
            index.h(
              "div",
              { class: "header-hint" },
              core.I18n.get(this.headerHint)
            ),
            index.h(
              "amplify-picker",
              { acceptValue: "image/*", inputHandler: this.handleInput },
              index.h(
                "div",
                { class: "picker-body", slot: "picker" },
                this.previewState
                  ? index.h("img", { src: `${this.previewState}` })
                  : index.h("amplify-icon", { name: "photoPlaceholder" })
              )
            ),
            index.h(
              "div",
              { class: "placeholder-hint" },
              core.I18n.get(this.placeholderHint)
            ),
            index.h(
              "amplify-button",
              { handleButtonClick: () => this.handleClick(this.file) },
              core.I18n.get(this.buttonText)
            )
          )
        );
      }
    };
    AmplifyPhotoPicker.style = amplifyPhotoPickerCss;

    exports.amplify_photo_picker = AmplifyPhotoPicker;

    /***/
  },

  /***/ 78800: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);

    const amplifyPickerCss =
      ".picker{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}";

    const AmplifyPicker = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Picker button text */
        this.pickerText = Translations.Translations.PICKER_TEXT;
        /** File input accept value */
        this.acceptValue = "*/*";
      }
      render() {
        return index.h(
          "div",
          { class: "picker" },
          index.h(
            "slot",
            { name: "picker" },
            index.h("amplify-button", null, core.I18n.get(this.pickerText))
          ),
          index.h("input", {
            title: core.I18n.get(this.pickerText),
            type: "file",
            accept: this.acceptValue,
            onChange: (e) => this.inputHandler(e),
          })
        );
      }
    };
    AmplifyPicker.style = amplifyPickerCss;

    exports.amplify_picker = AmplifyPicker;

    /***/
  },

  /***/ 31686: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);
    const authHelpers = __webpack_require__(79513);
    const buffer = _interopDefault(__webpack_require__(14300));

    const amplifyRadioButtonCss =
      ":host{--font-family:var(--amplify-font-family)}.radio-button{display:block;width:100%;padding:16px;font-size:var(--amplify-text-sm);font-family:var(--font-family)}.radio-button input{margin-right:12px}";

    const AmplifyRadioButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** (Optional) The placeholder for the input element.  Using hints is recommended, but placeholders can also be useful to convey information to users. */
        this.placeholder = "";
        /** If `true`, the radio button is selected. */
        this.checked = false;
        /** If `true`, the checkbox is disabled */
        this.disabled = false;
      }
      render() {
        return index.h(
          "span",
          { class: "radio-button" },
          index.h(
            "input",
            Object.assign(
              {
                type: "radio",
                name: this.name,
                value: this.value,
                onInput: this.handleInputChange,
                placeholder: this.placeholder,
                id: this.fieldId,
                checked: this.checked,
                disabled: this.disabled,
              },
              this.inputProps
            )
          ),
          index.h("amplify-label", { htmlFor: this.fieldId }, this.label)
        );
      }
    };
    AmplifyRadioButton.style = amplifyRadioButtonCss;

    const amplifyToastCss =
      ':host{--background-color:var(--amplify-secondary-tint);--color:var(--amplify-white);--font-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--close-icon-color:var(--amplify-white);--close-icon-hover:var(--amplify-red)}.toast-icon{padding-right:5px}.toast{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;position:absolute;top:0;left:0;width:100%;z-index:99;-webkit-box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 5px 0 rgba(0, 0, 0, 0.3);padding:16px;background-color:var(--background-color);font-size:var(--font-size);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px;font-family:var(--font-family)}.toast>span{margin-right:10px}.toast-close{margin-left:auto;-ms-flex-item-align:center;align-self:center;position:relative;width:18px;height:18px;overflow:hidden;cursor:pointer;background:transparent;border:none}.toast-close::before,.toast-close::after{content:"";position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:var(--close-icon-color)}.toast-close:hover::before,.toast-close:hover::after{background:var(--close-icon-hover)}.toast-close::before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.toast-close::after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}';

    const AmplifyToast = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Message to be displayed inside the toast*/
        this.message = "";
      }
      /*
  TODO #170365145: Work on a helper function that will populate and
  update class colors for success / warning / failure messages
  */
      render() {
        return index.h(
          "div",
          { class: "toast" },
          index.h("amplify-icon", { class: "toast-icon", name: "warning" }),
          this.message ? index.h("span", null, this.message) : null,
          index.h("slot", null),
          index.h("button", { class: "toast-close", onClick: this.handleClose })
        );
      }
    };
    AmplifyToast.style = amplifyToastCss;

    // can-promise has a crash in some versions of react native that dont have
    // standard global objects
    // https://github.com/soldair/node-qrcode/issues/157

    var canPromise = function () {
      return (
        typeof Promise === "function" &&
        Promise.prototype &&
        Promise.prototype.then
      );
    };

    var toString = {}.toString;

    var isarray =
      Array.isArray ||
      function (arr) {
        return toString.call(arr) == "[object Array]";
      };

    function typedArraySupport() {
      // Can typed array instances be augmented?
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          },
        };
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }

    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

    var K_MAX_LENGTH = Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;

    function Buffer(arg, offset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, offset, length);
      }

      if (typeof arg === "number") {
        return allocUnsafe(this, arg);
      }

      return from(this, arg, offset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;

      // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
      if (
        typeof Symbol !== "undefined" &&
        Symbol.species &&
        Buffer[Symbol.species] === Buffer
      ) {
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true,
          enumerable: false,
          writable: false,
        });
      }
    }

    function checked(length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum " +
            "size: 0x" +
            K_MAX_LENGTH.toString(16) +
            " bytes"
        );
      }
      return length | 0;
    }

    function isnan(val) {
      return val !== val; // eslint-disable-line no-self-compare
    }

    function createBuffer(that, length) {
      var buf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        buf = new Uint8Array(length);
        buf.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        buf = that;
        if (buf === null) {
          buf = new Buffer(length);
        }
        buf.length = length;
      }

      return buf;
    }

    function allocUnsafe(that, size) {
      var buf = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          buf[i] = 0;
        }
      }

      return buf;
    }

    function fromString(that, string) {
      var length = byteLength(string) | 0;
      var buf = createBuffer(that, length);

      var actual = buf.write(string);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
      }

      return buf;
    }

    function fromArrayLike(that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }

    function fromArrayBuffer(that, array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError("'length' is out of bounds");
      }

      var buf;
      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        buf.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        buf = fromArrayLike(that, buf);
      }

      return buf;
    }

    function fromObject(that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(that, len);

        if (buf.length === 0) {
          return buf;
        }

        obj.copy(buf, 0, 0, len);
        return buf;
      }

      if (obj) {
        if (
          (typeof ArrayBuffer !== "undefined" &&
            obj.buffer instanceof ArrayBuffer) ||
          "length" in obj
        ) {
          if (typeof obj.length !== "number" || isnan(obj.length)) {
            return createBuffer(that, 0);
          }
          return fromArrayLike(that, obj);
        }

        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(that, obj.data);
        }
      }

      throw new TypeError(
        "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
      );
    }

    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xd7ff && codePoint < 0xe000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xdbff) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
              continue;
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
              continue;
            }

            // valid lead
            leadSurrogate = codePoint;

            continue;
          }

          // 2 leads in a row
          if (codePoint < 0xdc00) {
            if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
            leadSurrogate = codePoint;
            continue;
          }

          // valid surrogate pair
          codePoint =
            (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break;
          bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break;
          bytes.push(
            (codePoint >> 0xc) | 0xe0,
            ((codePoint >> 0x6) & 0x3f) | 0x80,
            (codePoint & 0x3f) | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break;
          bytes.push(
            (codePoint >> 0x12) | 0xf0,
            ((codePoint >> 0xc) & 0x3f) | 0x80,
            ((codePoint >> 0x6) & 0x3f) | 0x80,
            (codePoint & 0x3f) | 0x80
          );
        } else {
          throw new Error("Invalid code point");
        }
      }

      return bytes;
    }

    function byteLength(string) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }
      if (
        typeof ArrayBuffer !== "undefined" &&
        typeof ArrayBuffer.isView === "function" &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)
      ) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        string = "" + string;
      }

      var len = string.length;
      if (len === 0) return 0;

      return utf8ToBytes(string).length;
    }

    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }

    function utf8Write(buf, string, offset, length) {
      return blitBuffer(
        utf8ToBytes(string, buf.length - offset),
        buf,
        offset,
        length
      );
    }

    function from(that, value, offset, length) {
      if (typeof value === "number") {
        throw new TypeError('"value" argument must not be a number');
      }

      if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, offset, length);
      }

      if (typeof value === "string") {
        return fromString(that, value);
      }

      return fromObject(that, value);
    }

    Buffer.prototype.write = function write(string, offset, length) {
      // Buffer#write(string)
      if (offset === undefined) {
        length = this.length;
        offset = 0;
        // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === "string") {
        length = this.length;
        offset = 0;
        // Buffer#write(string, offset[, length])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
        } else {
          length = undefined;
        }
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if (
        (string.length > 0 && (length < 0 || offset < 0)) ||
        offset > this.length
      ) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }

      return utf8Write(this, string, offset, length);
    };

    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        // Return an augmented `Uint8Array` instance
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf;
    };

    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("sourceStart out of bounds");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len;
    };

    Buffer.prototype.fill = function fill(val, start, end) {
      // Handle string cases:
      if (typeof val === "string") {
        if (typeof start === "string") {
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }

      if (end <= start) {
        return this;
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val) ? val : new Buffer(val);
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this;
    };

    Buffer.concat = function concat(list, length) {
      if (!isarray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }

      if (list.length === 0) {
        return createBuffer(null, 0);
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = allocUnsafe(null, length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer;
    };

    Buffer.byteLength = byteLength;

    Buffer.prototype._isBuffer = true;
    Buffer.isBuffer = function isBuffer(b) {
      return !!(b != null && b._isBuffer);
    };

    var alloc = function (size) {
      var buffer = new Buffer(size);
      buffer.fill(0);
      return buffer;
    };

    var from_1 = function (data) {
      return new Buffer(data);
    };

    var typedarrayBuffer = {
      alloc: alloc,
      from: from_1,
    };

    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0, // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706,
    ];

    /**
     * Returns the QR Code size for the specified version
     *
     * @param  {Number} version QR Code version
     * @return {Number}         size of QR code
     */
    var getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };

    /**
     * Returns the total number of codewords used to store data and EC information.
     *
     * @param  {Number} version QR Code version
     * @return {Number}         Data length in bits
     */
    var getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };

    /**
     * Encode data with Bose-Chaudhuri-Hocquenghem
     *
     * @param  {Number} data Value to encode
     * @return {Number}      Encoded value
     */
    var getBCHDigit = function (data) {
      var digit = 0;

      while (data !== 0) {
        digit++;
        data >>>= 1;
      }

      return digit;
    };

    var setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }

      toSJISFunction = f;
    };

    var isKanjiModeEnabled = function () {
      return typeof toSJISFunction !== "undefined";
    };

    var toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };

    var utils = {
      getSymbolSize: getSymbolSize,
      getSymbolTotalCodewords: getSymbolTotalCodewords,
      getBCHDigit: getBCHDigit,
      setToSJISFunction: setToSJISFunction,
      isKanjiModeEnabled: isKanjiModeEnabled,
      toSJIS: toSJIS,
    };

    function createCommonjsModule(fn, basedir, module) {
      return (
        (module = {
          path: basedir,
          exports: {},
          require: function (path, base) {
            return commonjsRequire();
          },
        }),
        fn(module, module.exports),
        module.exports
      );
    }

    function commonjsRequire() {
      throw new Error(
        "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
      );
    }

    var errorCorrectionLevel = createCommonjsModule(function (module, exports) {
      exports.L = { bit: 1 };
      exports.M = { bit: 0 };
      exports.Q = { bit: 3 };
      exports.H = { bit: 2 };

      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }

        var lcStr = string.toLowerCase();

        switch (lcStr) {
          case "l":
          case "low":
            return exports.L;

          case "m":
          case "medium":
            return exports.M;

          case "q":
          case "quartile":
            return exports.Q;

          case "h":
          case "high":
            return exports.H;

          default:
            throw new Error("Unknown EC Level: " + string);
        }
      }

      exports.isValid = function isValid(level) {
        return (
          level &&
          typeof level.bit !== "undefined" &&
          level.bit >= 0 &&
          level.bit < 4
        );
      };

      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }

        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    });

    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }

    BitBuffer.prototype = {
      get: function (index) {
        var bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - (index % 8))) & 1) === 1;
      },

      put: function (num, length) {
        for (var i = 0; i < length; i++) {
          this.putBit(((num >>> (length - i - 1)) & 1) === 1);
        }
      },

      getLengthInBits: function () {
        return this.length;
      },

      putBit: function (bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }

        if (bit) {
          this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        }

        this.length++;
      },
    };

    var bitBuffer = BitBuffer;

    /**
     * Helper class to handle QR Code symbol modules
     *
     * @param {Number} size Symbol size
     */
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }

      this.size = size;
      this.data = typedarrayBuffer.alloc(size * size);
      this.reservedBit = typedarrayBuffer.alloc(size * size);
    }

    /**
     * Set bit value at specified location
     * If reserved flag is set, this bit will be ignored during masking process
     *
     * @param {Number}  row
     * @param {Number}  col
     * @param {Boolean} value
     * @param {Boolean} reserved
     */
    BitMatrix.prototype.set = function (row, col, value, reserved) {
      var index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };

    /**
     * Returns bit value at specified location
     *
     * @param  {Number}  row
     * @param  {Number}  col
     * @return {Boolean}
     */
    BitMatrix.prototype.get = function (row, col) {
      return this.data[row * this.size + col];
    };

    /**
     * Applies xor operator at specified location
     * (used during masking process)
     *
     * @param {Number}  row
     * @param {Number}  col
     * @param {Boolean} value
     */
    BitMatrix.prototype.xor = function (row, col, value) {
      this.data[row * this.size + col] ^= value;
    };

    /**
     * Check if bit at specified location is reserved
     *
     * @param {Number}   row
     * @param {Number}   col
     * @return {Boolean}
     */
    BitMatrix.prototype.isReserved = function (row, col) {
      return this.reservedBit[row * this.size + col];
    };

    var bitMatrix = BitMatrix;

    var alignmentPattern = createCommonjsModule(function (module, exports) {
      /**
       * Alignment pattern are fixed reference pattern in defined positions
       * in a matrix symbology, which enables the decode software to re-synchronise
       * the coordinate mapping of the image modules in the event of moderate amounts
       * of distortion of the image.
       *
       * Alignment patterns are present only in QR Code symbols of version 2 or larger
       * and their number depends on the symbol version.
       */

      var getSymbolSize = utils.getSymbolSize;

      /**
       * Calculate the row/column coordinates of the center module of each alignment pattern
       * for the specified QR Code version.
       *
       * The alignment patterns are positioned symmetrically on either side of the diagonal
       * running from the top left corner of the symbol to the bottom right corner.
       *
       * Since positions are simmetrical only half of the coordinates are returned.
       * Each item of the array will represent in turn the x and y coordinate.
       * @see {@link getPositions}
       *
       * @param  {Number} version QR Code version
       * @return {Array}          Array of coordinate
       */
      exports.getRowColCoords = function getRowColCoords(version) {
        if (version === 1) return [];

        var posCount = Math.floor(version / 7) + 2;
        var size = getSymbolSize(version);
        var intervals =
          size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
        var positions = [size - 7]; // Last coord is always (size - 7)

        for (var i = 1; i < posCount - 1; i++) {
          positions[i] = positions[i - 1] - intervals;
        }

        positions.push(6); // First coord is always 6

        return positions.reverse();
      };

      /**
       * Returns an array containing the positions of each alignment pattern.
       * Each array's element represent the center point of the pattern as (x, y) coordinates
       *
       * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
       * and filtering out the items that overlaps with finder pattern
       *
       * @example
       * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
       * The alignment patterns, therefore, are to be centered on (row, column)
       * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
       * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
       * and are not therefore used for alignment patterns.
       *
       * var pos = getPositions(7)
       * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
       *
       * @param  {Number} version QR Code version
       * @return {Array}          Array of coordinates
       */
      exports.getPositions = function getPositions(version) {
        var coords = [];
        var pos = exports.getRowColCoords(version);
        var posLength = pos.length;

        for (var i = 0; i < posLength; i++) {
          for (var j = 0; j < posLength; j++) {
            // Skip if position is occupied by finder patterns
            if (
              (i === 0 && j === 0) || // top-left
              (i === 0 && j === posLength - 1) || // bottom-left
              (i === posLength - 1 && j === 0)
            ) {
              // top-right
              continue;
            }

            coords.push([pos[i], pos[j]]);
          }
        }

        return coords;
      };
    });

    var getSymbolSize$1 = utils.getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;

    /**
     * Returns an array containing the positions of each finder pattern.
     * Each array's element represent the top-left point of the pattern as (x, y) coordinates
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinates
     */
    var getPositions = function getPositions(version) {
      var size = getSymbolSize$1(version);

      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE],
      ];
    };

    var finderPattern = {
      getPositions: getPositions,
    };

    var maskPattern = createCommonjsModule(function (module, exports) {
      /**
       * Data mask pattern reference
       * @type {Object}
       */
      exports.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };

      /**
       * Weighted penalty scores for the undesirable features
       * @type {Object}
       */
      var PenaltyScores = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10,
      };

      /**
       * Check if mask pattern value is valid
       *
       * @param  {Number}  mask    Mask pattern
       * @return {Boolean}         true if valid, false otherwise
       */
      exports.isValid = function isValid(mask) {
        return (
          mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7
        );
      };

      /**
       * Returns mask pattern from a value.
       * If value is not valid, returns undefined
       *
       * @param  {Number|String} value        Mask pattern value
       * @return {Number}                     Valid mask pattern or undefined
       */
      exports.from = function from(value) {
        return exports.isValid(value) ? parseInt(value, 10) : undefined;
      };

      /**
       * Find adjacent modules in row/column with the same color
       * and assign a penalty value.
       *
       * Points: N1 + i
       * i is the amount by which the number of adjacent modules of the same color exceeds 5
       */
      exports.getPenaltyN1 = function getPenaltyN1(data) {
        var size = data.size;
        var points = 0;
        var sameCountCol = 0;
        var sameCountRow = 0;
        var lastCol = null;
        var lastRow = null;

        for (var row = 0; row < size; row++) {
          sameCountCol = sameCountRow = 0;
          lastCol = lastRow = null;

          for (var col = 0; col < size; col++) {
            var module = data.get(row, col);
            if (module === lastCol) {
              sameCountCol++;
            } else {
              if (sameCountCol >= 5)
                points += PenaltyScores.N1 + (sameCountCol - 5);
              lastCol = module;
              sameCountCol = 1;
            }

            module = data.get(col, row);
            if (module === lastRow) {
              sameCountRow++;
            } else {
              if (sameCountRow >= 5)
                points += PenaltyScores.N1 + (sameCountRow - 5);
              lastRow = module;
              sameCountRow = 1;
            }
          }

          if (sameCountCol >= 5)
            points += PenaltyScores.N1 + (sameCountCol - 5);
          if (sameCountRow >= 5)
            points += PenaltyScores.N1 + (sameCountRow - 5);
        }

        return points;
      };

      /**
       * Find 2x2 blocks with the same color and assign a penalty value
       *
       * Points: N2 * (m - 1) * (n - 1)
       */
      exports.getPenaltyN2 = function getPenaltyN2(data) {
        var size = data.size;
        var points = 0;

        for (var row = 0; row < size - 1; row++) {
          for (var col = 0; col < size - 1; col++) {
            var last =
              data.get(row, col) +
              data.get(row, col + 1) +
              data.get(row + 1, col) +
              data.get(row + 1, col + 1);

            if (last === 4 || last === 0) points++;
          }
        }

        return points * PenaltyScores.N2;
      };

      /**
       * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
       * preceded or followed by light area 4 modules wide
       *
       * Points: N3 * number of pattern found
       */
      exports.getPenaltyN3 = function getPenaltyN3(data) {
        var size = data.size;
        var points = 0;
        var bitsCol = 0;
        var bitsRow = 0;

        for (var row = 0; row < size; row++) {
          bitsCol = bitsRow = 0;
          for (var col = 0; col < size; col++) {
            bitsCol = ((bitsCol << 1) & 0x7ff) | data.get(row, col);
            if (col >= 10 && (bitsCol === 0x5d0 || bitsCol === 0x05d)) points++;

            bitsRow = ((bitsRow << 1) & 0x7ff) | data.get(col, row);
            if (col >= 10 && (bitsRow === 0x5d0 || bitsRow === 0x05d)) points++;
          }
        }

        return points * PenaltyScores.N3;
      };

      /**
       * Calculate proportion of dark modules in entire symbol
       *
       * Points: N4 * k
       *
       * k is the rating of the deviation of the proportion of dark modules
       * in the symbol from 50% in steps of 5%
       */
      exports.getPenaltyN4 = function getPenaltyN4(data) {
        var darkCount = 0;
        var modulesCount = data.data.length;

        for (var i = 0; i < modulesCount; i++) darkCount += data.data[i];

        var k = Math.abs(Math.ceil((darkCount * 100) / modulesCount / 5) - 10);

        return k * PenaltyScores.N4;
      };

      /**
       * Return mask value at given position
       *
       * @param  {Number} maskPattern Pattern reference value
       * @param  {Number} i           Row
       * @param  {Number} j           Column
       * @return {Boolean}            Mask value
       */
      function getMaskAt(maskPattern, i, j) {
        switch (maskPattern) {
          case exports.Patterns.PATTERN000:
            return (i + j) % 2 === 0;
          case exports.Patterns.PATTERN001:
            return i % 2 === 0;
          case exports.Patterns.PATTERN010:
            return j % 3 === 0;
          case exports.Patterns.PATTERN011:
            return (i + j) % 3 === 0;
          case exports.Patterns.PATTERN100:
            return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
          case exports.Patterns.PATTERN101:
            return ((i * j) % 2) + ((i * j) % 3) === 0;
          case exports.Patterns.PATTERN110:
            return (((i * j) % 2) + ((i * j) % 3)) % 2 === 0;
          case exports.Patterns.PATTERN111:
            return (((i * j) % 3) + ((i + j) % 2)) % 2 === 0;

          default:
            throw new Error("bad maskPattern:" + maskPattern);
        }
      }

      /**
       * Apply a mask pattern to a BitMatrix
       *
       * @param  {Number}    pattern Pattern reference number
       * @param  {BitMatrix} data    BitMatrix data
       */
      exports.applyMask = function applyMask(pattern, data) {
        var size = data.size;

        for (var col = 0; col < size; col++) {
          for (var row = 0; row < size; row++) {
            if (data.isReserved(row, col)) continue;
            data.xor(row, col, getMaskAt(pattern, row, col));
          }
        }
      };

      /**
       * Returns the best mask pattern for data
       *
       * @param  {BitMatrix} data
       * @return {Number} Mask pattern reference number
       */
      exports.getBestMask = function getBestMask(data, setupFormatFunc) {
        var numPatterns = Object.keys(exports.Patterns).length;
        var bestPattern = 0;
        var lowerPenalty = Infinity;

        for (var p = 0; p < numPatterns; p++) {
          setupFormatFunc(p);
          exports.applyMask(p, data);

          // Calculate penalty
          var penalty =
            exports.getPenaltyN1(data) +
            exports.getPenaltyN2(data) +
            exports.getPenaltyN3(data) +
            exports.getPenaltyN4(data);

          // Undo previously applied mask
          exports.applyMask(p, data);

          if (penalty < lowerPenalty) {
            lowerPenalty = penalty;
            bestPattern = p;
          }
        }

        return bestPattern;
      };
    });

    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
      4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
      9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
      13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
      18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34,
      40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17,
      33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56,
      66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
    ];

    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
      88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160,
      192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
      288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168,
      308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700,
      224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810,
      960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390,
      728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868,
      1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
      1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100,
      660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
    ];

    /**
     * Returns the number of error correction block that the QR Code should contain
     * for the specified version and error correction level.
     *
     * @param  {Number} version              QR Code version
     * @param  {Number} errorCorrectionLevel Error correction level
     * @return {Number}                      Number of error correction blocks
     */
    var getBlocksCount = function getBlocksCount(
      version,
      errorCorrectionLevel$1
    ) {
      switch (errorCorrectionLevel$1) {
        case errorCorrectionLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case errorCorrectionLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case errorCorrectionLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case errorCorrectionLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return undefined;
      }
    };

    /**
     * Returns the number of error correction codewords to use for the specified
     * version and error correction level.
     *
     * @param  {Number} version              QR Code version
     * @param  {Number} errorCorrectionLevel Error correction level
     * @return {Number}                      Number of error correction codewords
     */
    var getTotalCodewordsCount = function getTotalCodewordsCount(
      version,
      errorCorrectionLevel$1
    ) {
      switch (errorCorrectionLevel$1) {
        case errorCorrectionLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case errorCorrectionLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case errorCorrectionLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case errorCorrectionLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return undefined;
      }
    };

    var errorCorrectionCode = {
      getBlocksCount: getBlocksCount,
      getTotalCodewordsCount: getTotalCodewordsCount,
    };

    var EXP_TABLE = typedarrayBuffer.alloc(512);
    var LOG_TABLE = typedarrayBuffer.alloc(256);
    /**
     * Precompute the log and anti-log tables for faster computation later
     *
     * For each possible value in the galois field 2^8, we will pre-compute
     * the logarithm and anti-logarithm (exponential) of this value
     *
     * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
     */
    (function initTables() {
      var x = 1;
      for (var i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;

        x <<= 1; // multiply by 2

        // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
        // This means that when a number is 256 or larger, it should be XORed with 0x11D.
        if (x & 0x100) {
          // similar to x >= 256, but a lot faster (because 0x100 == 256)
          x ^= 0x11d;
        }
      }

      // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
      // stay inside the bounds (because we will mainly use this table for the multiplication of
      // two GF numbers, no more).
      // @see {@link mul}
      for (i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();

    /**
     * Returns log value of n inside Galois Field
     *
     * @param  {Number} n
     * @return {Number}
     */
    var log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };

    /**
     * Returns anti-log value of n inside Galois Field
     *
     * @param  {Number} n
     * @return {Number}
     */
    var exp = function exp(n) {
      return EXP_TABLE[n];
    };

    /**
     * Multiplies two number inside Galois Field
     *
     * @param  {Number} x
     * @param  {Number} y
     * @return {Number}
     */
    var mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;

      // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
      // @see {@link initTables}
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };

    var galoisField = {
      log: log,
      exp: exp,
      mul: mul,
    };

    var polynomial = createCommonjsModule(function (module, exports) {
      /**
       * Multiplies two polynomials inside Galois Field
       *
       * @param  {Buffer} p1 Polynomial
       * @param  {Buffer} p2 Polynomial
       * @return {Buffer}    Product of p1 and p2
       */
      exports.mul = function mul(p1, p2) {
        var coeff = typedarrayBuffer.alloc(p1.length + p2.length - 1);

        for (var i = 0; i < p1.length; i++) {
          for (var j = 0; j < p2.length; j++) {
            coeff[i + j] ^= galoisField.mul(p1[i], p2[j]);
          }
        }

        return coeff;
      };

      /**
       * Calculate the remainder of polynomials division
       *
       * @param  {Buffer} divident Polynomial
       * @param  {Buffer} divisor  Polynomial
       * @return {Buffer}          Remainder
       */
      exports.mod = function mod(divident, divisor) {
        var result = typedarrayBuffer.from(divident);

        while (result.length - divisor.length >= 0) {
          var coeff = result[0];

          for (var i = 0; i < divisor.length; i++) {
            result[i] ^= galoisField.mul(divisor[i], coeff);
          }

          // remove all zeros from buffer head
          var offset = 0;
          while (offset < result.length && result[offset] === 0) offset++;
          result = result.slice(offset);
        }

        return result;
      };

      /**
       * Generate an irreducible generator polynomial of specified degree
       * (used by Reed-Solomon encoder)
       *
       * @param  {Number} degree Degree of the generator polynomial
       * @return {Buffer}        Buffer containing polynomial coefficients
       */
      exports.generateECPolynomial = function generateECPolynomial(degree) {
        var poly = typedarrayBuffer.from([1]);
        for (var i = 0; i < degree; i++) {
          poly = exports.mul(poly, [1, galoisField.exp(i)]);
        }

        return poly;
      };
    });

    var Buffer$1 = buffer.Buffer;

    function ReedSolomonEncoder(degree) {
      this.genPoly = undefined;
      this.degree = degree;

      if (this.degree) this.initialize(this.degree);
    }

    /**
     * Initialize the encoder.
     * The input param should correspond to the number of error correction codewords.
     *
     * @param  {Number} degree
     */
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      // create an irreducible generator polynomial
      this.degree = degree;
      this.genPoly = polynomial.generateECPolynomial(this.degree);
    };

    /**
     * Encodes a chunk of data
     *
     * @param  {Buffer} data Buffer containing input data
     * @return {Buffer}      Buffer containing encoded data
     */
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }

      // Calculate EC for this data block
      // extends data size to data+genPoly size
      var pad = typedarrayBuffer.alloc(this.degree);
      var paddedData = Buffer$1.concat([data, pad], data.length + this.degree);

      // The error correction codewords are the remainder after dividing the data codewords
      // by a generator polynomial
      var remainder = polynomial.mod(paddedData, this.genPoly);

      // return EC data blocks (last n byte, where n is the degree of genPoly)
      // If coefficients number in remainder are less than genPoly degree,
      // pad with 0s to the left to reach the needed number of coefficients
      var start = this.degree - remainder.length;
      if (start > 0) {
        var buff = typedarrayBuffer.alloc(this.degree);
        remainder.copy(buff, start);

        return buff;
      }

      return remainder;
    };

    var reedSolomonEncoder = ReedSolomonEncoder;

    /**
     * Check if QR Code version is valid
     *
     * @param  {Number}  version QR Code version
     * @return {Boolean}         true if valid version, false otherwise
     */
    var isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };

    var versionCheck = {
      isValid: isValid,
    };

    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji =
      "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|" +
      "[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|" +
      "[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|" +
      "[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");

    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";

    var KANJI = new RegExp(kanji, "g");
    var BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    var BYTE = new RegExp(byte, "g");
    var NUMERIC = new RegExp(numeric, "g");
    var ALPHANUMERIC = new RegExp(alphanumeric, "g");

    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");

    var testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };

    var testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };

    var testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };

    var regex = {
      KANJI: KANJI,
      BYTE_KANJI: BYTE_KANJI,
      BYTE: BYTE,
      NUMERIC: NUMERIC,
      ALPHANUMERIC: ALPHANUMERIC,
      testKanji: testKanji,
      testNumeric: testNumeric,
      testAlphanumeric: testAlphanumeric,
    };

    var mode = createCommonjsModule(function (module, exports) {
      /**
       * Numeric mode encodes data from the decimal digit set (0 - 9)
       * (byte values 30HEX to 39HEX).
       * Normally, 3 data characters are represented by 10 bits.
       *
       * @type {Object}
       */
      exports.NUMERIC = {
        id: "Numeric",
        bit: 1 << 0,
        ccBits: [10, 12, 14],
      };

      /**
       * Alphanumeric mode encodes data from a set of 45 characters,
       * i.e. 10 numeric digits (0 - 9),
       *      26 alphabetic characters (A - Z),
       *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
       * Normally, two input characters are represented by 11 bits.
       *
       * @type {Object}
       */
      exports.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 1 << 1,
        ccBits: [9, 11, 13],
      };

      /**
       * In byte mode, data is encoded at 8 bits per character.
       *
       * @type {Object}
       */
      exports.BYTE = {
        id: "Byte",
        bit: 1 << 2,
        ccBits: [8, 16, 16],
      };

      /**
       * The Kanji mode efficiently encodes Kanji characters in accordance with
       * the Shift JIS system based on JIS X 0208.
       * The Shift JIS values are shifted from the JIS X 0208 values.
       * JIS X 0208 gives details of the shift coded representation.
       * Each two-byte character value is compacted to a 13-bit binary codeword.
       *
       * @type {Object}
       */
      exports.KANJI = {
        id: "Kanji",
        bit: 1 << 3,
        ccBits: [8, 10, 12],
      };

      /**
       * Mixed mode will contain a sequences of data in a combination of any of
       * the modes described above
       *
       * @type {Object}
       */
      exports.MIXED = {
        bit: -1,
      };

      /**
       * Returns the number of bits needed to store the data length
       * according to QR Code specifications.
       *
       * @param  {Mode}   mode    Data mode
       * @param  {Number} version QR Code version
       * @return {Number}         Number of bits
       */
      exports.getCharCountIndicator = function getCharCountIndicator(
        mode,
        version
      ) {
        if (!mode.ccBits) throw new Error("Invalid mode: " + mode);

        if (!versionCheck.isValid(version)) {
          throw new Error("Invalid version: " + version);
        }

        if (version >= 1 && version < 10) return mode.ccBits[0];
        else if (version < 27) return mode.ccBits[1];
        return mode.ccBits[2];
      };

      /**
       * Returns the most efficient mode to store the specified data
       *
       * @param  {String} dataStr Input data string
       * @return {Mode}           Best mode
       */
      exports.getBestModeForData = function getBestModeForData(dataStr) {
        if (regex.testNumeric(dataStr)) return exports.NUMERIC;
        else if (regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
        else if (regex.testKanji(dataStr)) return exports.KANJI;
        else return exports.BYTE;
      };

      /**
       * Return mode name as string
       *
       * @param {Mode} mode Mode object
       * @returns {String}  Mode name
       */
      exports.toString = function toString(mode) {
        if (mode && mode.id) return mode.id;
        throw new Error("Invalid mode");
      };

      /**
       * Check if input param is a valid mode object
       *
       * @param   {Mode}    mode Mode object
       * @returns {Boolean} True if valid mode, false otherwise
       */
      exports.isValid = function isValid(mode) {
        return mode && mode.bit && mode.ccBits;
      };

      /**
       * Get mode object from its name
       *
       * @param   {String} string Mode name
       * @returns {Mode}          Mode object
       */
      function fromString(string) {
        if (typeof string !== "string") {
          throw new Error("Param is not a string");
        }

        var lcStr = string.toLowerCase();

        switch (lcStr) {
          case "numeric":
            return exports.NUMERIC;
          case "alphanumeric":
            return exports.ALPHANUMERIC;
          case "kanji":
            return exports.KANJI;
          case "byte":
            return exports.BYTE;
          default:
            throw new Error("Unknown mode: " + string);
        }
      }

      /**
       * Returns mode from a value.
       * If value is not a valid mode, returns defaultValue
       *
       * @param  {Mode|String} value        Encoding mode
       * @param  {Mode}        defaultValue Fallback value
       * @return {Mode}                     Encoding mode
       */
      exports.from = function from(value, defaultValue) {
        if (exports.isValid(value)) {
          return value;
        }

        try {
          return fromString(value);
        } catch (e) {
          return defaultValue;
        }
      };
    });

    var version = createCommonjsModule(function (module, exports) {
      // Generator polynomial used to encode version information
      var G18 =
        (1 << 12) |
        (1 << 11) |
        (1 << 10) |
        (1 << 9) |
        (1 << 8) |
        (1 << 5) |
        (1 << 2) |
        (1 << 0);
      var G18_BCH = utils.getBCHDigit(G18);

      function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
          if (
            length <=
            exports.getCapacity(currentVersion, errorCorrectionLevel, mode)
          ) {
            return currentVersion;
          }
        }

        return undefined;
      }

      function getReservedBitsCount(mode$1, version) {
        // Character count indicator + mode indicator bits
        return mode.getCharCountIndicator(mode$1, version) + 4;
      }

      function getTotalBitsFromDataArray(segments, version) {
        var totalBits = 0;

        segments.forEach(function (data) {
          var reservedBits = getReservedBitsCount(data.mode, version);
          totalBits += reservedBits + data.getBitsLength();
        });

        return totalBits;
      }

      function getBestVersionForMixedData(segments, errorCorrectionLevel) {
        for (var currentVersion = 1; currentVersion <= 40; currentVersion++) {
          var length = getTotalBitsFromDataArray(segments, currentVersion);
          if (
            length <=
            exports.getCapacity(
              currentVersion,
              errorCorrectionLevel,
              mode.MIXED
            )
          ) {
            return currentVersion;
          }
        }

        return undefined;
      }

      /**
       * Returns version number from a value.
       * If value is not a valid version, returns defaultValue
       *
       * @param  {Number|String} value        QR Code version
       * @param  {Number}        defaultValue Fallback value
       * @return {Number}                     QR Code version number
       */
      exports.from = function from(value, defaultValue) {
        if (versionCheck.isValid(value)) {
          return parseInt(value, 10);
        }

        return defaultValue;
      };

      /**
       * Returns how much data can be stored with the specified QR code version
       * and error correction level
       *
       * @param  {Number} version              QR Code version (1-40)
       * @param  {Number} errorCorrectionLevel Error correction level
       * @param  {Mode}   mode                 Data mode
       * @return {Number}                      Quantity of storable data
       */
      exports.getCapacity = function getCapacity(
        version,
        errorCorrectionLevel,
        mode$1
      ) {
        if (!versionCheck.isValid(version)) {
          throw new Error("Invalid QR Code version");
        }

        // Use Byte mode as default
        if (typeof mode$1 === "undefined") mode$1 = mode.BYTE;

        // Total codewords for this QR code version (Data + Error correction)
        var totalCodewords = utils.getSymbolTotalCodewords(version);

        // Total number of error correction codewords
        var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(
          version,
          errorCorrectionLevel
        );

        // Total number of data codewords
        var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

        if (mode$1 === mode.MIXED) return dataTotalCodewordsBits;

        var usableBits =
          dataTotalCodewordsBits - getReservedBitsCount(mode$1, version);

        // Return max number of storable codewords
        switch (mode$1) {
          case mode.NUMERIC:
            return Math.floor((usableBits / 10) * 3);

          case mode.ALPHANUMERIC:
            return Math.floor((usableBits / 11) * 2);

          case mode.KANJI:
            return Math.floor(usableBits / 13);

          case mode.BYTE:
          default:
            return Math.floor(usableBits / 8);
        }
      };

      /**
       * Returns the minimum version needed to contain the amount of data
       *
       * @param  {Segment} data                    Segment of data
       * @param  {Number} [errorCorrectionLevel=H] Error correction level
       * @param  {Mode} mode                       Data mode
       * @return {Number}                          QR Code version
       */
      exports.getBestVersionForData = function getBestVersionForData(
        data,
        errorCorrectionLevel$1
      ) {
        var seg;

        var ecl = errorCorrectionLevel.from(
          errorCorrectionLevel$1,
          errorCorrectionLevel.M
        );

        if (isarray(data)) {
          if (data.length > 1) {
            return getBestVersionForMixedData(data, ecl);
          }

          if (data.length === 0) {
            return 1;
          }

          seg = data[0];
        } else {
          seg = data;
        }

        return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
      };

      /**
       * Returns version information with relative error correction bits
       *
       * The version information is included in QR Code symbols of version 7 or larger.
       * It consists of an 18-bit sequence containing 6 data bits,
       * with 12 error correction bits calculated using the (18, 6) Golay code.
       *
       * @param  {Number} version QR Code version
       * @return {Number}         Encoded version info bits
       */
      exports.getEncodedBits = function getEncodedBits(version) {
        if (!versionCheck.isValid(version) || version < 7) {
          throw new Error("Invalid QR Code version");
        }

        var d = version << 12;

        while (utils.getBCHDigit(d) - G18_BCH >= 0) {
          d ^= G18 << (utils.getBCHDigit(d) - G18_BCH);
        }

        return (version << 12) | d;
      };
    });

    var G15 =
      (1 << 10) |
      (1 << 8) |
      (1 << 5) |
      (1 << 4) |
      (1 << 2) |
      (1 << 1) |
      (1 << 0);
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
    var G15_BCH = utils.getBCHDigit(G15);

    /**
     * Returns format information with relative error correction bits
     *
     * The format information is a 15-bit sequence containing 5 data bits,
     * with 10 error correction bits calculated using the (15, 5) BCH code.
     *
     * @param  {Number} errorCorrectionLevel Error correction level
     * @param  {Number} mask                 Mask pattern
     * @return {Number}                      Encoded format information bits
     */
    var getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      var data = (errorCorrectionLevel.bit << 3) | mask;
      var d = data << 10;

      while (utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << (utils.getBCHDigit(d) - G15_BCH);
      }

      // xor final data with mask pattern in order to ensure that
      // no combination of Error Correction Level and data mask pattern
      // will result in an all-zero data string
      return ((data << 10) | d) ^ G15_MASK;
    };

    var formatInfo = {
      getEncodedBits: getEncodedBits,
    };

    function NumericData(data) {
      this.mode = mode.NUMERIC;
      this.data = data.toString();
    }

    NumericData.getBitsLength = function getBitsLength(length) {
      return (
        10 * Math.floor(length / 3) + (length % 3 ? (length % 3) * 3 + 1 : 0)
      );
    };

    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };

    NumericData.prototype.write = function write(bitBuffer) {
      var i, group, value;

      // The input data string is divided into groups of three digits,
      // and each group is converted to its 10-bit binary equivalent.
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);

        bitBuffer.put(value, 10);
      }

      // If the number of input digits is not an exact multiple of three,
      // the final one or two digits are converted to 4 or 7 bits respectively.
      var remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);

        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };

    var numericData = NumericData;

    /**
     * Array of characters available in alphanumeric mode
     *
     * As per QR Code specification, to each character
     * is assigned a value from 0 to 44 which in this case coincides
     * with the array index
     *
     * @type {Array}
     */
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":",
    ];

    function AlphanumericData(data) {
      this.mode = mode.ALPHANUMERIC;
      this.data = data;
    }

    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };

    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };

    AlphanumericData.prototype.write = function write(bitBuffer) {
      var i;

      // Input data characters are divided into groups of two characters
      // and encoded as 11-bit binary codes.
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        // The character value of the first character is multiplied by 45
        var value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

        // The character value of the second digit is added to the product
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

        // The sum is then stored as 11-bit binary number
        bitBuffer.put(value, 11);
      }

      // If the number of input data characters is not a multiple of two,
      // the character value of the final character is encoded as a 6-bit binary number.
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };

    var alphanumericData = AlphanumericData;

    function ByteData(data) {
      this.mode = mode.BYTE;
      this.data = typedarrayBuffer.from(data);
    }

    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };

    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };

    ByteData.prototype.write = function (bitBuffer) {
      for (var i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };

    var byteData = ByteData;

    function KanjiData(data) {
      this.mode = mode.KANJI;
      this.data = data;
    }

    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };

    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };

    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };

    KanjiData.prototype.write = function (bitBuffer) {
      var i;

      // In the Shift JIS system, Kanji characters are represented by a two byte combination.
      // These byte values are shifted from the JIS X 0208 values.
      // JIS X 0208 gives details of the shift coded representation.
      for (i = 0; i < this.data.length; i++) {
        var value = utils.toSJIS(this.data[i]);

        // For characters with Shift JIS values from 0x8140 to 0x9FFC:
        if (value >= 0x8140 && value <= 0x9ffc) {
          // Subtract 0x8140 from Shift JIS value
          value -= 0x8140;

          // For characters with Shift JIS values from 0xE040 to 0xEBBF
        } else if (value >= 0xe040 && value <= 0xebbf) {
          // Subtract 0xC140 from Shift JIS value
          value -= 0xc140;
        } else {
          throw new Error(
            "Invalid SJIS character: " +
              this.data[i] +
              "\n" +
              "Make sure your charset is UTF-8"
          );
        }

        // Multiply most significant byte of result by 0xC0
        // and add least significant byte to product
        value = ((value >>> 8) & 0xff) * 0xc0 + (value & 0xff);

        // Convert result to a 13-bit binary string
        bitBuffer.put(value, 13);
      }
    };

    var kanjiData = KanjiData;

    var dijkstra_1 = createCommonjsModule(function (module) {
      /******************************************************************************
       * Created 2008-08-19.
       *
       * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
       *
       * Copyright (C) 2008
       *   Wyatt Baldwin <self@wyattbaldwin.com>
       *   All rights reserved
       *
       * Licensed under the MIT license.
       *
       *   http://www.opensource.org/licenses/mit-license.php
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       *****************************************************************************/
      var dijkstra = {
        single_source_shortest_paths: function (graph, s, d) {
          // Predecessor map for each node that has been encountered.
          // node ID => predecessor node ID
          var predecessors = {};

          // Costs of shortest paths from s to all nodes encountered.
          // node ID => cost
          var costs = {};
          costs[s] = 0;

          // Costs of shortest paths from s to all nodes encountered; differs from
          // `costs` in that it provides easy access to the node that currently has
          // the known shortest path from s.
          // XXX: Do we actually need both `costs` and `open`?
          var open = dijkstra.PriorityQueue.make();
          open.push(s, 0);

          var closest,
            u,
            v,
            cost_of_s_to_u,
            adjacent_nodes,
            cost_of_e,
            cost_of_s_to_u_plus_cost_of_e,
            cost_of_s_to_v,
            first_visit;
          while (!open.empty()) {
            // In the nodes remaining in graph that have a known cost from s,
            // find the node, u, that currently has the shortest path from s.
            closest = open.pop();
            u = closest.value;
            cost_of_s_to_u = closest.cost;

            // Get nodes adjacent to u...
            adjacent_nodes = graph[u] || {};

            // ...and explore the edges that connect u to those nodes, updating
            // the cost of the shortest paths to any or all of those nodes as
            // necessary. v is the node across the current edge from u.
            for (v in adjacent_nodes) {
              if (adjacent_nodes.hasOwnProperty(v)) {
                // Get the cost of the edge running from u to v.
                cost_of_e = adjacent_nodes[v];

                // Cost of s to u plus the cost of u to v across e--this is *a*
                // cost from s to v that may or may not be less than the current
                // known cost to v.
                cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

                // If we haven't visited v yet OR if the current known cost from s to
                // v is greater than the new cost we just found (cost of s to u plus
                // cost of u to v across e), update v's cost in the cost list and
                // update v's predecessor in the predecessor list (it's now u).
                cost_of_s_to_v = costs[v];
                first_visit = typeof costs[v] === "undefined";
                if (
                  first_visit ||
                  cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e
                ) {
                  costs[v] = cost_of_s_to_u_plus_cost_of_e;
                  open.push(v, cost_of_s_to_u_plus_cost_of_e);
                  predecessors[v] = u;
                }
              }
            }
          }

          if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
            var msg = ["Could not find a path from ", s, " to ", d, "."].join(
              ""
            );
            throw new Error(msg);
          }

          return predecessors;
        },

        extract_shortest_path_from_predecessor_list: function (
          predecessors,
          d
        ) {
          var nodes = [];
          var u = d;
          while (u) {
            nodes.push(u);
            u = predecessors[u];
          }
          nodes.reverse();
          return nodes;
        },

        find_path: function (graph, s, d) {
          var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
          return dijkstra.extract_shortest_path_from_predecessor_list(
            predecessors,
            d
          );
        },

        /**
         * A very naive priority queue implementation.
         */
        PriorityQueue: {
          make: function (opts) {
            var T = dijkstra.PriorityQueue,
              t = {},
              key;
            opts = opts || {};
            for (key in T) {
              if (T.hasOwnProperty(key)) {
                t[key] = T[key];
              }
            }
            t.queue = [];
            t.sorter = opts.sorter || T.default_sorter;
            return t;
          },

          default_sorter: function (a, b) {
            return a.cost - b.cost;
          },

          /**
           * Add a new item to the queue and ensure the highest priority element
           * is at the front of the queue.
           */
          push: function (value, cost) {
            var item = { value: value, cost: cost };
            this.queue.push(item);
            this.queue.sort(this.sorter);
          },

          /**
           * Return the highest priority element in the queue.
           */
          pop: function () {
            return this.queue.shift();
          },

          empty: function () {
            return this.queue.length === 0;
          },
        },
      };

      // node.js module exports
      {
        module.exports = dijkstra;
      }
    });

    var segments = createCommonjsModule(function (module, exports) {
      /**
       * Returns UTF8 byte length
       *
       * @param  {String} str Input string
       * @return {Number}     Number of byte
       */
      function getStringByteLength(str) {
        return unescape(encodeURIComponent(str)).length;
      }

      /**
       * Get a list of segments of the specified mode
       * from a string
       *
       * @param  {Mode}   mode Segment mode
       * @param  {String} str  String to process
       * @return {Array}       Array of object with segments data
       */
      function getSegments(regex, mode, str) {
        var segments = [];
        var result;

        while ((result = regex.exec(str)) !== null) {
          segments.push({
            data: result[0],
            index: result.index,
            mode: mode,
            length: result[0].length,
          });
        }

        return segments;
      }

      /**
       * Extracts a series of segments with the appropriate
       * modes from a string
       *
       * @param  {String} dataStr Input string
       * @return {Array}          Array of object with segments data
       */
      function getSegmentsFromString(dataStr) {
        var numSegs = getSegments(regex.NUMERIC, mode.NUMERIC, dataStr);
        var alphaNumSegs = getSegments(
          regex.ALPHANUMERIC,
          mode.ALPHANUMERIC,
          dataStr
        );
        var byteSegs;
        var kanjiSegs;

        if (utils.isKanjiModeEnabled()) {
          byteSegs = getSegments(regex.BYTE, mode.BYTE, dataStr);
          kanjiSegs = getSegments(regex.KANJI, mode.KANJI, dataStr);
        } else {
          byteSegs = getSegments(regex.BYTE_KANJI, mode.BYTE, dataStr);
          kanjiSegs = [];
        }

        var segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);

        return segs
          .sort(function (s1, s2) {
            return s1.index - s2.index;
          })
          .map(function (obj) {
            return {
              data: obj.data,
              mode: obj.mode,
              length: obj.length,
            };
          });
      }

      /**
       * Returns how many bits are needed to encode a string of
       * specified length with the specified mode
       *
       * @param  {Number} length String length
       * @param  {Mode} mode     Segment mode
       * @return {Number}        Bit length
       */
      function getSegmentBitsLength(length, mode$1) {
        switch (mode$1) {
          case mode.NUMERIC:
            return numericData.getBitsLength(length);
          case mode.ALPHANUMERIC:
            return alphanumericData.getBitsLength(length);
          case mode.KANJI:
            return kanjiData.getBitsLength(length);
          case mode.BYTE:
            return byteData.getBitsLength(length);
        }
      }

      /**
       * Merges adjacent segments which have the same mode
       *
       * @param  {Array} segs Array of object with segments data
       * @return {Array}      Array of object with segments data
       */
      function mergeSegments(segs) {
        return segs.reduce(function (acc, curr) {
          var prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
          if (prevSeg && prevSeg.mode === curr.mode) {
            acc[acc.length - 1].data += curr.data;
            return acc;
          }

          acc.push(curr);
          return acc;
        }, []);
      }

      /**
       * Generates a list of all possible nodes combination which
       * will be used to build a segments graph.
       *
       * Nodes are divided by groups. Each group will contain a list of all the modes
       * in which is possible to encode the given text.
       *
       * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
       * The group for '12345' will contain then 3 objects, one for each
       * possible encoding mode.
       *
       * Each node represents a possible segment.
       *
       * @param  {Array} segs Array of object with segments data
       * @return {Array}      Array of object with segments data
       */
      function buildNodes(segs) {
        var nodes = [];
        for (var i = 0; i < segs.length; i++) {
          var seg = segs[i];

          switch (seg.mode) {
            case mode.NUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: mode.ALPHANUMERIC, length: seg.length },
                { data: seg.data, mode: mode.BYTE, length: seg.length },
              ]);
              break;
            case mode.ALPHANUMERIC:
              nodes.push([
                seg,
                { data: seg.data, mode: mode.BYTE, length: seg.length },
              ]);
              break;
            case mode.KANJI:
              nodes.push([
                seg,
                {
                  data: seg.data,
                  mode: mode.BYTE,
                  length: getStringByteLength(seg.data),
                },
              ]);
              break;
            case mode.BYTE:
              nodes.push([
                {
                  data: seg.data,
                  mode: mode.BYTE,
                  length: getStringByteLength(seg.data),
                },
              ]);
          }
        }

        return nodes;
      }

      /**
       * Builds a graph from a list of nodes.
       * All segments in each node group will be connected with all the segments of
       * the next group and so on.
       *
       * At each connection will be assigned a weight depending on the
       * segment's byte length.
       *
       * @param  {Array} nodes    Array of object with segments data
       * @param  {Number} version QR Code version
       * @return {Object}         Graph of all possible segments
       */
      function buildGraph(nodes, version) {
        var table = {};
        var graph = { start: {} };
        var prevNodeIds = ["start"];

        for (var i = 0; i < nodes.length; i++) {
          var nodeGroup = nodes[i];
          var currentNodeIds = [];

          for (var j = 0; j < nodeGroup.length; j++) {
            var node = nodeGroup[j];
            var key = "" + i + j;

            currentNodeIds.push(key);
            table[key] = { node: node, lastCount: 0 };
            graph[key] = {};

            for (var n = 0; n < prevNodeIds.length; n++) {
              var prevNodeId = prevNodeIds[n];

              if (
                table[prevNodeId] &&
                table[prevNodeId].node.mode === node.mode
              ) {
                graph[prevNodeId][key] =
                  getSegmentBitsLength(
                    table[prevNodeId].lastCount + node.length,
                    node.mode
                  ) -
                  getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);

                table[prevNodeId].lastCount += node.length;
              } else {
                if (table[prevNodeId])
                  table[prevNodeId].lastCount = node.length;

                graph[prevNodeId][key] =
                  getSegmentBitsLength(node.length, node.mode) +
                  4 +
                  mode.getCharCountIndicator(node.mode, version); // switch cost
              }
            }
          }

          prevNodeIds = currentNodeIds;
        }

        for (n = 0; n < prevNodeIds.length; n++) {
          graph[prevNodeIds[n]]["end"] = 0;
        }

        return { map: graph, table: table };
      }

      /**
       * Builds a segment from a specified data and mode.
       * If a mode is not specified, the more suitable will be used.
       *
       * @param  {String} data             Input data
       * @param  {Mode | String} modesHint Data mode
       * @return {Segment}                 Segment
       */
      function buildSingleSegment(data, modesHint) {
        var mode$1;
        var bestMode = mode.getBestModeForData(data);

        mode$1 = mode.from(modesHint, bestMode);

        // Make sure data can be encoded
        if (mode$1 !== mode.BYTE && mode$1.bit < bestMode.bit) {
          throw new Error(
            '"' +
              data +
              '"' +
              " cannot be encoded with mode " +
              mode.toString(mode$1) +
              ".\n Suggested mode is: " +
              mode.toString(bestMode)
          );
        }

        // Use Mode.BYTE if Kanji support is disabled
        if (mode$1 === mode.KANJI && !utils.isKanjiModeEnabled()) {
          mode$1 = mode.BYTE;
        }

        switch (mode$1) {
          case mode.NUMERIC:
            return new numericData(data);

          case mode.ALPHANUMERIC:
            return new alphanumericData(data);

          case mode.KANJI:
            return new kanjiData(data);

          case mode.BYTE:
            return new byteData(data);
        }
      }

      /**
       * Builds a list of segments from an array.
       * Array can contain Strings or Objects with segment's info.
       *
       * For each item which is a string, will be generated a segment with the given
       * string and the more appropriate encoding mode.
       *
       * For each item which is an object, will be generated a segment with the given
       * data and mode.
       * Objects must contain at least the property "data".
       * If property "mode" is not present, the more suitable mode will be used.
       *
       * @param  {Array} array Array of objects with segments data
       * @return {Array}       Array of Segments
       */
      exports.fromArray = function fromArray(array) {
        return array.reduce(function (acc, seg) {
          if (typeof seg === "string") {
            acc.push(buildSingleSegment(seg, null));
          } else if (seg.data) {
            acc.push(buildSingleSegment(seg.data, seg.mode));
          }

          return acc;
        }, []);
      };

      /**
       * Builds an optimized sequence of segments from a string,
       * which will produce the shortest possible bitstream.
       *
       * @param  {String} data    Input string
       * @param  {Number} version QR Code version
       * @return {Array}          Array of segments
       */
      exports.fromString = function fromString(data, version) {
        var segs = getSegmentsFromString(data, utils.isKanjiModeEnabled());

        var nodes = buildNodes(segs);
        var graph = buildGraph(nodes, version);
        var path = dijkstra_1.find_path(graph.map, "start", "end");

        var optimizedSegs = [];
        for (var i = 1; i < path.length - 1; i++) {
          optimizedSegs.push(graph.table[path[i]].node);
        }

        return exports.fromArray(mergeSegments(optimizedSegs));
      };

      /**
       * Splits a string in various segments with the modes which
       * best represent their content.
       * The produced segments are far from being optimized.
       * The output of this function is only used to estimate a QR Code version
       * which may contain the data.
       *
       * @param  {string} data Input string
       * @return {Array}       Array of segments
       */
      exports.rawSplit = function rawSplit(data) {
        return exports.fromArray(
          getSegmentsFromString(data, utils.isKanjiModeEnabled())
        );
      };
    });

    /**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

    /**
     * Add finder patterns bits to matrix
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */
    function setupFinderPattern(matrix, version) {
      var size = matrix.size;
      var pos = finderPattern.getPositions(version);

      for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];

        for (var r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;

          for (var c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;

            if (
              (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
              (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
              (r >= 2 && r <= 4 && c >= 2 && c <= 4)
            ) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }

    /**
     * Add timing pattern bits to matrix
     *
     * Note: this function must be called before {@link setupAlignmentPattern}
     *
     * @param  {BitMatrix} matrix Modules matrix
     */
    function setupTimingPattern(matrix) {
      var size = matrix.size;

      for (var r = 8; r < size - 8; r++) {
        var value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }

    /**
     * Add alignment patterns bits to matrix
     *
     * Note: this function must be called after {@link setupTimingPattern}
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */
    function setupAlignmentPattern(matrix, version) {
      var pos = alignmentPattern.getPositions(version);

      for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0];
        var col = pos[i][1];

        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (
              r === -2 ||
              r === 2 ||
              c === -2 ||
              c === 2 ||
              (r === 0 && c === 0)
            ) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }

    /**
     * Add version info bits to matrix
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */
    function setupVersionInfo(matrix, version$1) {
      var size = matrix.size;
      var bits = version.getEncodedBits(version$1);
      var row, col, mod;

      for (var i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = (i % 3) + size - 8 - 3;
        mod = ((bits >> i) & 1) === 1;

        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }

    /**
     * Add format info bits to matrix
     *
     * @param  {BitMatrix} matrix               Modules matrix
     * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
     * @param  {Number}    maskPattern          Mask pattern reference value
     */
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      var size = matrix.size;
      var bits = formatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      var i, mod;

      for (i = 0; i < 15; i++) {
        mod = ((bits >> i) & 1) === 1;

        // vertical
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }

        // horizontal
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }

      // fixed module
      matrix.set(size - 8, 8, 1, true);
    }

    /**
     * Add encoded data bits to matrix
     *
     * @param  {BitMatrix} matrix Modules matrix
     * @param  {Buffer}    data   Data codewords
     */
    function setupData(matrix, data) {
      var size = matrix.size;
      var inc = -1;
      var row = size - 1;
      var bitIndex = 7;
      var byteIndex = 0;

      for (var col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;

        while (true) {
          for (var c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              var dark = false;

              if (byteIndex < data.length) {
                dark = ((data[byteIndex] >>> bitIndex) & 1) === 1;
              }

              matrix.set(row, col - c, dark);
              bitIndex--;

              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }

          row += inc;

          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }

    /**
     * Create encoded codewords from data input
     *
     * @param  {Number}   version              QR Code version
     * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
     * @param  {ByteData} data                 Data input
     * @return {Buffer}                        Buffer containing encoded codewords
     */
    function createData(version, errorCorrectionLevel, segments) {
      // Prepare data buffer
      var buffer = new bitBuffer();

      segments.forEach(function (data) {
        // prefix data with mode indicator (4 bits)
        buffer.put(data.mode.bit, 4);

        // Prefix data with character count indicator.
        // The character count indicator is a string of bits that represents the
        // number of characters that are being encoded.
        // The character count indicator must be placed after the mode indicator
        // and must be a certain number of bits long, depending on the QR version
        // and data mode
        // @see {@link Mode.getCharCountIndicator}.
        buffer.put(
          data.getLength(),
          mode.getCharCountIndicator(data.mode, version)
        );

        // add binary data sequence to buffer
        data.write(buffer);
      });

      // Calculate required number of bits
      var totalCodewords = utils.getSymbolTotalCodewords(version);
      var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(
        version,
        errorCorrectionLevel
      );
      var dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

      // Add a terminator.
      // If the bit string is shorter than the total number of required bits,
      // a terminator of up to four 0s must be added to the right side of the string.
      // If the bit string is more than four bits shorter than the required number of bits,
      // add four 0s to the end.
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }

      // If the bit string is fewer than four bits shorter, add only the number of 0s that
      // are needed to reach the required number of bits.

      // After adding the terminator, if the number of bits in the string is not a multiple of 8,
      // pad the string on the right with 0s to make the string's length a multiple of 8.
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }

      // Add pad bytes if the string is still shorter than the total number of required bits.
      // Extend the buffer to fill the data capacity of the symbol corresponding to
      // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
      // and 00010001 (0x11) alternately.
      var remainingByte =
        (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (var i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 0x11 : 0xec, 8);
      }

      return createCodewords(buffer, version, errorCorrectionLevel);
    }

    /**
     * Encode input data with Reed-Solomon and return codewords with
     * relative error correction bits
     *
     * @param  {BitBuffer} bitBuffer            Data to encode
     * @param  {Number}    version              QR Code version
     * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
     * @return {Buffer}                         Buffer containing encoded codewords
     */
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      // Total codewords for this QR code version (Data + Error correction)
      var totalCodewords = utils.getSymbolTotalCodewords(version);

      // Total number of error correction codewords
      var ecTotalCodewords = errorCorrectionCode.getTotalCodewordsCount(
        version,
        errorCorrectionLevel
      );

      // Total number of data codewords
      var dataTotalCodewords = totalCodewords - ecTotalCodewords;

      // Total number of blocks
      var ecTotalBlocks = errorCorrectionCode.getBlocksCount(
        version,
        errorCorrectionLevel
      );

      // Calculate how many blocks each group should contain
      var blocksInGroup2 = totalCodewords % ecTotalBlocks;
      var blocksInGroup1 = ecTotalBlocks - blocksInGroup2;

      var totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);

      var dataCodewordsInGroup1 = Math.floor(
        dataTotalCodewords / ecTotalBlocks
      );
      var dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

      // Number of EC codewords is the same for both groups
      var ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

      // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
      var rs = new reedSolomonEncoder(ecCount);

      var offset = 0;
      var dcData = new Array(ecTotalBlocks);
      var ecData = new Array(ecTotalBlocks);
      var maxDataSize = 0;
      var buffer = typedarrayBuffer.from(bitBuffer.buffer);

      // Divide the buffer into the required number of blocks
      for (var b = 0; b < ecTotalBlocks; b++) {
        var dataSize =
          b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

        // extract a block of data from buffer
        dcData[b] = buffer.slice(offset, offset + dataSize);

        // Calculate EC codewords for this data block
        ecData[b] = rs.encode(dcData[b]);

        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }

      // Create final data
      // Interleave the data and error correction codewords from each block
      var data = typedarrayBuffer.alloc(totalCodewords);
      var index = 0;
      var i, r;

      // Add data codewords
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }

      // Apped EC codewords
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }

      return data;
    }

    /**
     * Build QR Code symbol
     *
     * @param  {String} data                 Input string
     * @param  {Number} version              QR Code version
     * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
     * @param  {MaskPattern} maskPattern     Mask pattern
     * @return {Object}                      Object containing symbol data
     */
    function createSymbol(
      data,
      version$1,
      errorCorrectionLevel,
      maskPattern$1
    ) {
      var segments$1;

      if (isarray(data)) {
        segments$1 = segments.fromArray(data);
      } else if (typeof data === "string") {
        var estimatedVersion = version$1;

        if (!estimatedVersion) {
          var rawSegments = segments.rawSplit(data);

          // Estimate best version that can contain raw splitted segments
          estimatedVersion = version.getBestVersionForData(
            rawSegments,
            errorCorrectionLevel
          );
        }

        // Build optimized segments
        // If estimated version is undefined, try with the highest version
        segments$1 = segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }

      // Get the min version that can contain data
      var bestVersion = version.getBestVersionForData(
        segments$1,
        errorCorrectionLevel
      );

      // If no version is found, data cannot be stored
      if (!bestVersion) {
        throw new Error(
          "The amount of data is too big to be stored in a QR Code"
        );
      }

      // If not specified, use min version as default
      if (!version$1) {
        version$1 = bestVersion;

        // Check if the specified version can contain the data
      } else if (version$1 < bestVersion) {
        throw new Error(
          "\n" +
            "The chosen QR Code version cannot contain this amount of data.\n" +
            "Minimum version required to store current data is: " +
            bestVersion +
            ".\n"
        );
      }

      var dataBits = createData(version$1, errorCorrectionLevel, segments$1);

      // Allocate matrix buffer
      var moduleCount = utils.getSymbolSize(version$1);
      var modules = new bitMatrix(moduleCount);

      // Add function modules
      setupFinderPattern(modules, version$1);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version$1);

      // Add temporary dummy bits for format info just to set them as reserved.
      // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
      // since the masking operation must be performed only on the encoding region.
      // These blocks will be replaced with correct values later in code.
      setupFormatInfo(modules, errorCorrectionLevel, 0);

      if (version$1 >= 7) {
        setupVersionInfo(modules, version$1);
      }

      // Add data codewords
      setupData(modules, dataBits);

      if (isNaN(maskPattern$1)) {
        // Find best mask pattern
        maskPattern$1 = maskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }

      // Apply mask pattern
      maskPattern.applyMask(maskPattern$1, modules);

      // Replace format info bits with correct values
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern$1);

      return {
        modules: modules,
        version: version$1,
        errorCorrectionLevel: errorCorrectionLevel,
        maskPattern: maskPattern$1,
        segments: segments$1,
      };
    }

    /**
     * QR Code
     *
     * @param {String | Array} data                 Input data
     * @param {Object} options                      Optional configurations
     * @param {Number} options.version              QR Code version
     * @param {String} options.errorCorrectionLevel Error correction level
     * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
     */
    var create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }

      var errorCorrectionLevel$1 = errorCorrectionLevel.M;
      var version$1;
      var mask;

      if (typeof options !== "undefined") {
        // Use higher error correction level as default
        errorCorrectionLevel$1 = errorCorrectionLevel.from(
          options.errorCorrectionLevel,
          errorCorrectionLevel.M
        );
        version$1 = version.from(options.version);
        mask = maskPattern.from(options.maskPattern);

        if (options.toSJISFunc) {
          utils.setToSJISFunction(options.toSJISFunc);
        }
      }

      return createSymbol(data, version$1, errorCorrectionLevel$1, mask);
    };

    var qrcode = {
      create: create,
    };

    var utils$1 = createCommonjsModule(function (module, exports) {
      function hex2rgba(hex) {
        if (typeof hex === "number") {
          hex = hex.toString();
        }

        if (typeof hex !== "string") {
          throw new Error("Color should be defined as hex string");
        }

        var hexCode = hex.slice().replace("#", "").split("");
        if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
          throw new Error("Invalid hex color: " + hex);
        }

        // Convert from short to long form (fff -> ffffff)
        if (hexCode.length === 3 || hexCode.length === 4) {
          hexCode = Array.prototype.concat.apply(
            [],
            hexCode.map(function (c) {
              return [c, c];
            })
          );
        }

        // Add default alpha value
        if (hexCode.length === 6) hexCode.push("F", "F");

        var hexValue = parseInt(hexCode.join(""), 16);

        return {
          r: (hexValue >> 24) & 255,
          g: (hexValue >> 16) & 255,
          b: (hexValue >> 8) & 255,
          a: hexValue & 255,
          hex: "#" + hexCode.slice(0, 6).join(""),
        };
      }

      exports.getOptions = function getOptions(options) {
        if (!options) options = {};
        if (!options.color) options.color = {};

        var margin =
          typeof options.margin === "undefined" ||
          options.margin === null ||
          options.margin < 0
            ? 4
            : options.margin;

        var width =
          options.width && options.width >= 21 ? options.width : undefined;
        var scale = options.scale || 4;

        return {
          width: width,
          scale: width ? 4 : scale,
          margin: margin,
          color: {
            dark: hex2rgba(options.color.dark || "#000000ff"),
            light: hex2rgba(options.color.light || "#ffffffff"),
          },
          type: options.type,
          rendererOpts: options.rendererOpts || {},
        };
      };

      exports.getScale = function getScale(qrSize, opts) {
        return opts.width && opts.width >= qrSize + opts.margin * 2
          ? opts.width / (qrSize + opts.margin * 2)
          : opts.scale;
      };

      exports.getImageWidth = function getImageWidth(qrSize, opts) {
        var scale = exports.getScale(qrSize, opts);
        return Math.floor((qrSize + opts.margin * 2) * scale);
      };

      exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
        var size = qr.modules.size;
        var data = qr.modules.data;
        var scale = exports.getScale(size, opts);
        var symbolSize = Math.floor((size + opts.margin * 2) * scale);
        var scaledMargin = opts.margin * scale;
        var palette = [opts.color.light, opts.color.dark];

        for (var i = 0; i < symbolSize; i++) {
          for (var j = 0; j < symbolSize; j++) {
            var posDst = (i * symbolSize + j) * 4;
            var pxColor = opts.color.light;

            if (
              i >= scaledMargin &&
              j >= scaledMargin &&
              i < symbolSize - scaledMargin &&
              j < symbolSize - scaledMargin
            ) {
              var iSrc = Math.floor((i - scaledMargin) / scale);
              var jSrc = Math.floor((j - scaledMargin) / scale);
              pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
            }

            imgData[posDst++] = pxColor.r;
            imgData[posDst++] = pxColor.g;
            imgData[posDst++] = pxColor.b;
            imgData[posDst] = pxColor.a;
          }
        }
      };
    });

    var canvas = createCommonjsModule(function (module, exports) {
      function clearCanvas(ctx, canvas, size) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!canvas.style) canvas.style = {};
        canvas.height = size;
        canvas.width = size;
        canvas.style.height = size + "px";
        canvas.style.width = size + "px";
      }

      function getCanvasElement() {
        try {
          return document.createElement("canvas");
        } catch (e) {
          throw new Error("You need to specify a canvas element");
        }
      }

      exports.render = function render(qrData, canvas, options) {
        var opts = options;
        var canvasEl = canvas;

        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = undefined;
        }

        if (!canvas) {
          canvasEl = getCanvasElement();
        }

        opts = utils$1.getOptions(opts);
        var size = utils$1.getImageWidth(qrData.modules.size, opts);

        var ctx = canvasEl.getContext("2d");
        var image = ctx.createImageData(size, size);
        utils$1.qrToImageData(image.data, qrData, opts);

        clearCanvas(ctx, canvasEl, size);
        ctx.putImageData(image, 0, 0);

        return canvasEl;
      };

      exports.renderToDataURL = function renderToDataURL(
        qrData,
        canvas,
        options
      ) {
        var opts = options;

        if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
          opts = canvas;
          canvas = undefined;
        }

        if (!opts) opts = {};

        var canvasEl = exports.render(qrData, canvas, opts);

        var type = opts.type || "image/png";
        var rendererOpts = opts.rendererOpts || {};

        return canvasEl.toDataURL(type, rendererOpts.quality);
      };
    });

    function getColorAttrib(color, attrib) {
      var alpha = color.a / 255;
      var str = attrib + '="' + color.hex + '"';

      return alpha < 1
        ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
        : str;
    }

    function svgCmd(cmd, x, y) {
      var str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;

      return str;
    }

    function qrToPath(data, size, margin) {
      var path = "";
      var moveBy = 0;
      var newRow = false;
      var lineLength = 0;

      for (var i = 0; i < data.length; i++) {
        var col = Math.floor(i % size);
        var row = Math.floor(i / size);

        if (!col && !newRow) newRow = true;

        if (data[i]) {
          lineLength++;

          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow
              ? svgCmd("M", col + margin, 0.5 + row + margin)
              : svgCmd("m", moveBy, 0);

            moveBy = 0;
            newRow = false;
          }

          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }

      return path;
    }

    var render = function render(qrData, options, cb) {
      var opts = utils$1.getOptions(options);
      var size = qrData.modules.size;
      var data = qrData.modules.data;
      var qrcodesize = size + opts.margin * 2;

      var bg = !opts.color.light.a
        ? ""
        : "<path " +
          getColorAttrib(opts.color.light, "fill") +
          ' d="M0 0h' +
          qrcodesize +
          "v" +
          qrcodesize +
          'H0z"/>';

      var path =
        "<path " +
        getColorAttrib(opts.color.dark, "stroke") +
        ' d="' +
        qrToPath(data, size, opts.margin) +
        '"/>';

      var viewBox = 'viewBox="' + "0 0 " + qrcodesize + " " + qrcodesize + '"';

      var width = !opts.width
        ? ""
        : 'width="' + opts.width + '" height="' + opts.width + '" ';

      var svgTag =
        '<svg xmlns="http://www.w3.org/2000/svg" ' +
        width +
        viewBox +
        ' shape-rendering="crispEdges">' +
        bg +
        path +
        "</svg>\n";

      if (typeof cb === "function") {
        cb(null, svgTag);
      }

      return svgTag;
    };

    var svgTag = {
      render: render,
    };

    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      var args = [].slice.call(arguments, 1);
      var argsNum = args.length;
      var isLastArgCb = typeof args[argsNum - 1] === "function";

      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }

      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }

        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = undefined;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = undefined;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = undefined;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }

        if (argsNum === 1) {
          text = canvas;
          canvas = opts = undefined;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = undefined;
        }

        return new Promise(function (resolve, reject) {
          try {
            var data = qrcode.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }

      try {
        var data = qrcode.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }

    var create$1 = qrcode.create;
    var toCanvas = renderCanvas.bind(null, canvas.render);
    var toDataURL = renderCanvas.bind(null, canvas.renderToDataURL);

    // only svg for now.
    var toString_1 = renderCanvas.bind(null, function (data, _, opts) {
      return svgTag.render(data, opts);
    });

    var browser = {
      create: create$1,
      toCanvas: toCanvas,
      toDataURL: toDataURL,
      toString: toString_1,
    };

    const amplifyTotpSetupCss =
      ".totp-setup{text-align:center;margin-bottom:30px}.totp-setup img{height:128px;width:128px}";

    const logger = new core.Logger("TOTP");
    const AmplifyTOTPSetup = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.inputProps = {
          autoFocus: true,
        };
        /** Auth state change handler for this component */
        this.handleAuthStateChange = helpers.dispatchAuthStateChangeEvent;
        /** Used for header text in totp setup component */
        this.headerText = Translations.Translations.TOTP_HEADER_TEXT;
        /** Used for customizing the issuer string in the qr code image */
        this.issuer = Translations.Translations.TOTP_ISSUER;
        /** This is run after totp setup is complete. Useful if using this as standalone. */
        this.handleComplete = this.onTOTPEvent;
        /** Set this to true if this component is running outside the default `amplify-authenticator` usage */
        this.standalone = false;
        this.code = null;
        this.setupMessage = null;
        this.qrCodeInput = null;
        this.loading = false;
      }
      async componentWillLoad() {
        /**
         * If this component is being used internally by the authenticator, we want to re-run
         * setup only when the current auth state is `AuthState.TOTPSetup`.
         *
         * Ideally, we would only run the setup once when the component is mounted. This is not possible
         * due to a bug with slots -- a slotted component will run its `componentWillLoad` lifecycle before
         * it is even rendered. So instead we watch for authstate changes and run setup conditionally.
         */
        if (!this.standalone) {
          this.removeHubListener = helpers.onAuthUIStateChange((authState) => {
            if (authState === authTypes.AuthState.TOTPSetup) this.setup();
          });
        }
        await this.setup();
      }
      /**
       * If this component is being used externally, we can use `@Watch` as normal.
       */
      handleUserChange() {
        this.standalone && this.setup();
      }
      disconnectedCallback() {
        this.removeHubListener && this.removeHubListener(); // stop listening to `onAuthUIStateChange`
      }
      buildOtpAuthPath(user, issuer, secretKey) {
        return `otpauth://totp/${issuer}:${user.username}?secret=${secretKey}&issuer=${issuer}`;
      }
      async onTOTPEvent(user) {
        logger.debug("on totp event");
        await authHelpers.checkContact(user, this.handleAuthStateChange);
      }
      handleTotpInputChange(event) {
        this.setupMessage = null;
        this.qrCodeInput = event.target.value;
      }
      async generateQRCode(codeFromTotp) {
        try {
          this.qrCodeImageSource = await browser.toDataURL(codeFromTotp);
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
        }
      }
      async setup() {
        // ensure setup is only run once after totp setup is available
        if (this.code || this.loading) {
          logger.debug(
            "setup was attempted while another is in progress, skipping setup."
          );
          return;
        }
        if (!this.user || !this.user.associateSoftwareToken) {
          logger.debug(
            "setup was attempted with invalid `user`, skipping setup.",
            this.user
          );
          return;
        }
        if (!Auth.Auth || typeof Auth.Auth.setupTOTP !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.setupMessage = null;
        const encodedIssuer = encodeURI(core.I18n.get(this.issuer));
        this.loading = true;
        try {
          const secretKey = await Auth.Auth.setupTOTP(this.user);
          logger.debug("secret key", secretKey);
          this.code = this.buildOtpAuthPath(
            this.user,
            encodedIssuer,
            secretKey
          );
          this.generateQRCode(this.code);
        } catch (error) {
          helpers.dispatchToastHubEvent(error);
          logger.debug(
            core.I18n.get(Translations.Translations.TOTP_SETUP_FAILURE),
            error
          );
        } finally {
          this.loading = false;
        }
      }
      async verifyTotpToken(event) {
        if (event) {
          event.preventDefault();
        }
        if (!this.qrCodeInput) {
          logger.debug("No TOTP Code provided");
          return;
        }
        const user = this.user;
        if (
          !Auth.Auth ||
          typeof Auth.Auth.verifyTotpToken !== "function" ||
          typeof Auth.Auth.setPreferredMFA !== "function"
        ) {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        try {
          await Auth.Auth.verifyTotpToken(user, this.qrCodeInput);
          await Auth.Auth.setPreferredMFA(user, authTypes.MfaOption.TOTP);
          this.setupMessage = core.I18n.get(
            Translations.Translations.TOTP_SUCCESS_MESSAGE
          );
          logger.debug(
            core.I18n.get(Translations.Translations.TOTP_SUCCESS_MESSAGE)
          );
          await this.handleComplete(user);
        } catch (error) {
          this.setupMessage = core.I18n.get(
            Translations.Translations.TOTP_SETUP_FAILURE
          );
          logger.error(error);
        }
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "amplify-form-section",
            {
              headerText: core.I18n.get(this.headerText),
              submitButtonText: core.I18n.get(
                Translations.Translations.TOTP_SUBMIT_BUTTON_TEXT
              ),
              handleSubmit: (event) => this.verifyTotpToken(event),
              loading: this.loading,
            },
            index.h(
              "div",
              { class: "totp-setup" },
              this.qrCodeImageSource &&
                index.h("img", {
                  src: this.qrCodeImageSource,
                  alt: core.I18n.get(Translations.Translations.QR_CODE_ALT),
                }),
              index.h("amplify-form-field", {
                label: core.I18n.get(Translations.Translations.TOTP_LABEL),
                inputProps: this.inputProps,
                fieldId: "totpCode",
                name: "totpCode",
                handleInputChange: (event) => this.handleTotpInputChange(event),
              })
            )
          )
        );
      }
      static get watchers() {
        return {
          user: ["handleUserChange"],
        };
      }
    };
    AmplifyTOTPSetup.style = amplifyTotpSetupCss;

    exports.amplify_radio_button = AmplifyRadioButton;
    exports.amplify_toast = AmplifyToast;
    exports.amplify_totp_setup = AmplifyTOTPSetup;

    /***/
  },

  /***/ 11685: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const storageTypes = __webpack_require__(18332);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const storage = __webpack_require__(21967);
    const storageHelpers = __webpack_require__(71690);

    // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).
    var getRandomValues;
    var rnds8 = new Uint8Array(16);
    function rng() {
      // lazy load so that environments that need to polyfill have a chance to do so
      if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
        // find the complete implementation of crypto (msCrypto) on IE11.
        getRandomValues =
          (typeof crypto !== "undefined" &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          (typeof msCrypto !== "undefined" &&
            typeof msCrypto.getRandomValues === "function" &&
            msCrypto.getRandomValues.bind(msCrypto));

        if (!getRandomValues) {
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        }
      }

      return getRandomValues(rnds8);
    }

    const REGEX =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function validate(uuid) {
      return typeof uuid === "string" && REGEX.test(uuid);
    }

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */

    var byteToHex = [];

    for (var i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).substr(1));
    }

    function stringify(arr) {
      var offset =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
      var uuid = (
        byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        "-" +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        "-" +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        "-" +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        "-" +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]
      ).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
      // of the following:
      // - One or more input array values don't map to a hex octet (leading to
      // "undefined" in the uuid)
      // - Invalid input values for the RFC `version` or `variant` fields

      if (!validate(uuid)) {
        throw TypeError("Stringified UUID is invalid");
      }

      return uuid;
    }

    function v4(options, buf, offset) {
      options = options || {};
      var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

      rnds[6] = (rnds[6] & 0x0f) | 0x40;
      rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        offset = offset || 0;

        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }

        return buf;
      }

      return stringify(rnds);
    }

    const amplifyS3AlbumCss =
      ":host{--overlay-bg-color:rgba(0, 0, 0, 0.15)}.album-container{-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;margin:0 auto;padding:0 2rem}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-1rem -1rem;padding-bottom:3rem}.grid-item{position:relative;-ms-flex:1 0 22rem;flex:1 0 22rem;-ms-flex-positive:1;flex-grow:1;margin:1rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}amplify-s3-image{--width:22rem;--height:20rem;border-radius:5px;-o-object-fit:cover;object-fit:cover}.img-overlay{display:none;width:100%;height:21rem;position:absolute;top:0;left:0;background-color:var(--overlay-bg-color)}.grid-item:hover .img-overlay{display:block}";

    const logger = new core.Logger("S3Album");
    const AmplifyS3Album = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = "binary/octet-stream";
        /** The access level of the files */
        this.level = storageTypes.AccessLevel.Public;
        /** Boolean to enable or disable picker */
        this.picker = true;
        /** Picker button text */
        this.pickerText = Translations.Translations.PICKER_TEXT;
        this.albumItems = [];
        this.imgArr = {};
        this.list = async () => {
          const { path = "", level, track, identityId } = this;
          logger.debug("Album path: " + path);
          if (!storage.Storage || typeof storage.Storage.list !== "function") {
            throw new Error(constants.NO_STORAGE_MODULE_FOUND);
          }
          try {
            const data = await storage.Storage.list(path, {
              level,
              track,
              identityId,
            });
            this.marshal(data);
          } catch (error) {
            logger.warn(error);
          }
        };
        this.marshal = (list) => {
          list.forEach((item) => {
            const name = item.key.toLowerCase();
            const ext = name.split(".")[1];
            if (storageHelpers.imageFileType.has(ext)) {
              if (
                !item.contentType ||
                (item.contentType && item.contentType === "binary/octet-stream")
              ) {
                item.contentType = this.getContentType(item);
              }
            }
          });
          const filtered = list.filter(
            (item) => item.contentType && item.contentType.startsWith("image/")
          );
          let items = this.filter ? this.filter(filtered) : filtered;
          items = this.sort ? this.sort(items) : items;
          this.albumItems = items;
          logger.debug("album items", this.albumItems);
          this.constructImgArray(this.albumItems);
        };
        this.constructImgArray = (list) => {
          list.map((item) => {
            this.imgArr[`${item["key"]}`] = item["key"];
          });
        };
        this.handlePick = async (event) => {
          const file = event.target.files[0];
          const { path = "", level, track, fileToKey } = this;
          const key = path + storageHelpers.calcKey(file, fileToKey);
          try {
            await storageHelpers.putStorageObject(
              key,
              file,
              level,
              track,
              file["type"],
              logger
            );
          } catch (error) {
            logger.error(error);
            throw new Error(error);
          }
          if (Object.keys(this.imgArr).includes(key)) {
            this.albumItems = [...this.albumItems];
            this.imgArr[key] = `${key}-${v4()}`;
          } else {
            const filtered = [
              ...this.albumItems,
              ...(this.filter ? this.filter([{ key }]) : [{ key }]),
            ];
            this.albumItems = this.sort ? this.sort(filtered) : filtered;
          }
        };
      }
      getContentType(item) {
        return core.filenameToContentType(item.key, "image/*");
      }
      componentWillLoad() {
        this.list();
      }
      render() {
        return index.h(
          "div",
          null,
          index.h(
            "div",
            { class: "album-container" },
            index.h(
              "div",
              { class: "grid-row" },
              this.albumItems.map((item) => {
                return index.h(
                  "div",
                  { class: "grid-item", key: `key-${item.key}` },
                  index.h("amplify-s3-image", {
                    key: this.imgArr[item.key],
                    imgKey: item.key,
                    level: this.level,
                    path: this.path,
                    identityId: this.identityId,
                    track: this.track,
                    handleOnError: this.handleOnError,
                    handleOnLoad: this.handleOnLoad,
                  }),
                  index.h("span", { class: "img-overlay" })
                );
              })
            )
          ),
          this.picker &&
            index.h("amplify-picker", {
              pickerText: core.I18n.get(this.pickerText),
              inputHandler: (e) => this.handlePick(e),
              acceptValue: "image/*",
            })
        );
      }
    };
    AmplifyS3Album.style = amplifyS3AlbumCss;

    exports.amplify_s3_album = AmplifyS3Album;

    /***/
  },

  /***/ 79443: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const storageTypes = __webpack_require__(18332);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    __webpack_require__(18524);
    __webpack_require__(21967);
    const storageHelpers = __webpack_require__(71690);

    const logger = new core.Logger("S3ImagePicker");
    const AmplifyS3ImagePicker = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = "binary/octet-stream";
        /** The access level of the image */
        this.level = storageTypes.AccessLevel.Public;
        /** Title string value */
        this.headerTitle = Translations.Translations.IMAGE_PICKER_TITLE;
        /** Header Hint value in string */
        this.headerHint = Translations.Translations.IMAGE_PICKER_HINT;
        /** Placeholder hint that goes under the placeholder image */
        this.placeholderHint =
          Translations.Translations.IMAGE_PICKER_PLACEHOLDER_HINT;
        /** Upload Button Text as string */
        this.buttonText = Translations.Translations.IMAGE_PICKER_BUTTON_TEXT;
        this.handlePick = async (file) => {
          const { path = "", level, track, identityId, fileToKey } = this;
          const key = path + storageHelpers.calcKey(file, fileToKey);
          try {
            await storageHelpers.putStorageObject(
              key,
              file,
              level,
              track,
              file["type"],
              logger
            );
            this.src = await storageHelpers.getStorageObject(
              key,
              level,
              track,
              identityId,
              logger
            );
          } catch (error) {
            logger.error(error);
            throw new Error(error);
          }
        };
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h(
            "slot",
            { name: "photo-picker" },
            index.h("amplify-photo-picker", {
              previewSrc: this.src,
              handleClick: this.handlePick,
              headerTitle: core.I18n.get(this.headerTitle),
              headerHint: core.I18n.get(this.headerHint),
              placeholderHint: core.I18n.get(this.placeholderHint),
              buttonText: core.I18n.get(this.buttonText),
            })
          )
        );
      }
    };

    exports.amplify_s3_image_picker = AmplifyS3ImagePicker;

    /***/
  },

  /***/ 1856: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const storageTypes = __webpack_require__(18332);
    __webpack_require__(18524);
    __webpack_require__(21967);
    const storageHelpers = __webpack_require__(71690);

    const amplifyS3ImageCss =
      ":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}";

    const logger = new core.Logger("S3Image");
    const AmplifyS3Image = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = "binary/octet-stream";
        /** The access level of the image */
        this.level = storageTypes.AccessLevel.Public;
      }
      async watchHandler() {
        await this.load();
      }
      async componentWillLoad() {
        await this.load();
      }
      async load() {
        const { imgKey, path, body, contentType, level, track, identityId } =
          this;
        if (!imgKey && !path) {
          logger.debug("empty imgKey and path");
          return;
        }
        const key = imgKey || path;
        logger.debug("loading " + key + "...");
        try {
          if (body) {
            await storageHelpers.putStorageObject(
              imgKey,
              body,
              level,
              track,
              contentType,
              logger
            );
          }
          this.src = await storageHelpers.getStorageObject(
            key,
            level,
            track,
            identityId,
            logger
          );
        } catch (err) {
          logger.debug(err);
          throw new Error(err);
        }
      }
      render() {
        return index.h(
          index.Host,
          null,
          this.src &&
            index.h(
              "img",
              Object.assign(
                {
                  src: this.src,
                  alt: this.alt,
                  onLoad: this.handleOnLoad,
                  onError: this.handleOnError,
                },
                this.imgProps
              )
            )
        );
      }
      static get watchers() {
        return {
          body: ["watchHandler"],
        };
      }
    };
    AmplifyS3Image.style = amplifyS3ImageCss;

    exports.amplify_s3_image = AmplifyS3Image;

    /***/
  },

  /***/ 28370: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const storageTypes = __webpack_require__(18332);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    __webpack_require__(18524);
    __webpack_require__(21967);
    const storageHelpers = __webpack_require__(71690);

    const logger = new core.Logger("S3TextPicker");
    const AmplifyS3TextPicker = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = "text/*";
        /** The access level of the text file */
        this.level = storageTypes.AccessLevel.Public;
        /** Fallback content for aplify-s3-text */
        this.fallbackText = Translations.Translations.PICKER_TEXT;
      }
      async handleInput(event) {
        const file = event.target.files[0];
        const { path = "", level, fileToKey, track } = this;
        const key = path + storageHelpers.calcKey(file, fileToKey);
        if (!file) {
          throw new Error("No file was selected");
        }
        try {
          await storageHelpers.putStorageObject(
            key,
            file,
            level,
            track,
            file["type"],
            logger
          );
          this.src = key;
        } catch (error) {
          logger.debug(error);
          throw new Error(error);
        }
      }
      render() {
        return index.h(
          index.Host,
          null,
          index.h("amplify-s3-text", {
            textKey: this.src,
            path: this.path,
            level: this.level,
            track: this.track,
            identityId: this.identityId,
            contentType: this.contentType,
            fallbackText: core.I18n.get(this.fallbackText),
          }),
          index.h("amplify-picker", {
            inputHandler: (e) => this.handleInput(e),
            acceptValue: "text/*",
          })
        );
      }
    };

    exports.amplify_s3_text_picker = AmplifyS3TextPicker;

    /***/
  },

  /***/ 58192: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const storageTypes = __webpack_require__(18332);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    __webpack_require__(18524);
    __webpack_require__(21967);
    const storageHelpers = __webpack_require__(71690);

    const amplifyS3TextCss =
      ":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}";

    const logger = new core.Logger("S3Text");
    const AmplifyS3Text = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** The content type header used when uploading to S3 */
        this.contentType = "text/*";
        /** The access level of the text file */
        this.level = storageTypes.AccessLevel.Public;
        /** Fallback content */
        this.fallbackText = Translations.Translations.TEXT_FALLBACK_CONTENT;
      }
      async watchHandler() {
        await this.load();
      }
      async componentWillLoad() {
        await this.load();
      }
      async load() {
        const { path, textKey, body, contentType, level, track, identityId } =
          this;
        if (!textKey && !path) {
          logger.debug("empty textKey and path");
          return;
        }
        const key = textKey || path;
        logger.debug("loading " + key + "...");
        if (body) {
          await storageHelpers.putStorageObject(
            textKey,
            body,
            level,
            track,
            contentType,
            logger
          );
        }
        try {
          this.src = await storageHelpers.getTextSource(
            key,
            level,
            track,
            identityId,
            logger
          );
        } catch (err) {
          logger.debug(err);
          throw new Error(err);
        }
      }
      render() {
        return index.h(
          "div",
          null,
          index.h(
            "div",
            { class: "text-container" },
            this.src
              ? index.h("pre", null, this.src)
              : index.h("pre", null, core.I18n.get(this.fallbackText))
          )
        );
      }
      static get watchers() {
        return {
          textKey: ["watchHandler"],
          body: ["watchHandler"],
        };
      }
    };
    AmplifyS3Text.style = amplifyS3TextCss;

    exports.amplify_s3_text = AmplifyS3Text;

    /***/
  },

  /***/ 77564: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);

    const logger = new core.Logger("SelectMFAType");
    const AmplifySelectMFAType = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Fires when Verify is clicked */
        this.handleSubmit = (event) => this.verify(event);
        this.TOTPSetup = false;
        this.selectMessage = null;
        this.MFAMethod = null;
        this.isTOTP = false;
        this.isNoMFA = false;
        this.isSMS = false;
        this.loading = false;
        this.isToastVisible = false;
      }
      handleRadioButtonChange(event) {
        this.TOTPSetup = false;
        this.selectMessage = null;
        // Reseting state values to default
        this.isNoMFA = false;
        this.isTOTP = false;
        this.isSMS = false;
        this.isToastVisible = false;
        const { value, type, checked } = event.target;
        const checkType = ["radio", "checkbox"].includes(type);
        if (value === authTypes.MfaOption.SMS && checkType) {
          this.isSMS = checked;
        }
        if (value === authTypes.MfaOption.TOTP && checkType) {
          this.isTOTP = checked;
        }
        if (value === authTypes.MfaOption.NOMFA && checkType) {
          this.isNoMFA = checked;
        }
      }
      async verify(event) {
        // avoid submitting the form
        if (event) {
          event.preventDefault();
        }
        logger.debug("MFA Type Values", {
          TOTP: this.isTOTP,
          SMS: this.isSMS,
          "No MFA": this.isNoMFA,
        });
        if (this.isTOTP) {
          this.MFAMethod = authTypes.MfaOption.TOTP;
        } else if (this.isSMS) {
          this.MFAMethod = authTypes.MfaOption.SMS;
        } else if (this.isNoMFA) {
          this.MFAMethod = authTypes.MfaOption.NOMFA;
        }
        const user = this.authData;
        if (!Auth.Auth || typeof Auth.Auth.setPreferredMFA !== "function") {
          throw new Error(constants.NO_AUTH_MODULE_FOUND);
        }
        this.loading = true;
        try {
          const preferredMFAData = await Auth.Auth.setPreferredMFA(
            user,
            this.MFAMethod
          );
          logger.debug("Set Preferred MFA Succeeded", preferredMFAData);
          this.selectMessage = `${core.I18n.get(
            Translations.Translations.SUCCESS_MFA_TYPE
          )} ${this.MFAMethod}`;
        } catch (error) {
          const { message } = error;
          if (
            message === constants.USER_NOT_SETUP_SOFTWARE_TOKEN_MFA ||
            message === constants.USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA
          ) {
            this.TOTPSetup = true;
            this.selectMessage = core.I18n.get(
              Translations.Translations.SETUP_TOTP_REQUIRED
            );
          } else {
            logger.debug("Set Preferred MFA failed", error);
            this.selectMessage = core.I18n.get(
              Translations.Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME
            );
          }
        } finally {
          this.loading = false;
          this.isToastVisible = true;
        }
      }
      contentBuilder() {
        if (!this.MFATypes || Object.keys(this.MFATypes).length < 2) {
          logger.debug(
            core.I18n.get(
              Translations.Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE
            )
          );
          return index.h(
            "div",
            null,
            index.h(
              "a",
              null,
              core.I18n.get(
                Translations.Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE
              )
            )
          );
        }
        const { SMS, TOTP, Optional } = this.MFATypes;
        return index.h(
          "amplify-form-section",
          {
            submitButtonText: core.I18n.get(
              Translations.Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT
            ),
            headerText: core.I18n.get(
              Translations.Translations.SELECT_MFA_TYPE_HEADER_TEXT
            ),
            handleSubmit: (event) => this.handleSubmit(event),
            loading: this.loading,
          },
          SMS
            ? index.h("amplify-radio-button", {
                key: "sms",
                name: "MFAType",
                value: "SMS",
                label: "SMS",
                handleInputChange: (event) =>
                  this.handleRadioButtonChange(event),
              })
            : null,
          TOTP
            ? index.h("amplify-radio-button", {
                key: "totp",
                name: "MFAType",
                value: "TOTP",
                label: "TOTP",
                handleInputChange: (event) =>
                  this.handleRadioButtonChange(event),
              })
            : null,
          Optional
            ? index.h("amplify-radio-button", {
                key: "noMFA",
                name: "MFAType",
                value: "NOMFA",
                label: "No MFA",
                handleInputChange: (event) =>
                  this.handleRadioButtonChange(event),
              })
            : null
        );
      }
      renderToast() {
        if (this.isToastVisible && this.selectMessage) {
          return index.h("amplify-toast", {
            message: this.selectMessage,
            handleClose: () => {
              this.selectMessage = null;
              this.isToastVisible = false;
            },
          });
        }
        return null;
      }
      render() {
        return index.h(
          "div",
          null,
          this.contentBuilder(),
          this.TOTPSetup
            ? index.h("amplify-totp-setup", { user: this.authData })
            : null,
          this.renderToast()
        );
      }
    };

    exports.amplify_select_mfa_type = AmplifySelectMFAType;

    /***/
  },

  /***/ 8705: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const icons = __webpack_require__(24355);

    const amplifySignInButtonCss =
      '.sc-amplify-sign-in-button-h{--button-color:var(--amplify-secondary-color);--amazon-button-background:var(--amplify-primary-color);--amazon-button-color:var(--amplify-primary-contrast);--auth0-button-background:#eb5424;--auth0--button-border-color:#e14615;--auth0-button-color:var(--amplify-white);--facebook-button-background:#4267b2;--facebook--button-border-color:#4267b2;--facebook-button-color:var(--amplify-white);--google-button-background:#4285f4;--google--button-border-color:#4285f4;--google-button-color:var(--amplify-white);--oauth-button-background:var(--amplify-white);--oauth--button-color:#152939}.sign-in-button.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{position:relative;width:100%;border-radius:4px;margin-bottom:10px;cursor:pointer;padding:0;color:var(--button-color);font-size:var(--amplify-text-sm);-webkit-box-sizing:content-box;box-sizing:content-box}.sign-in-button.sc-amplify-sign-in-button button.sc-amplify-sign-in-button:hover{opacity:0.8}.sign-in-button.amazon.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--amazon-button-background);border:none;color:var(--amazon-button-color);font-family:"Amazon Ember"}.sign-in-button.auth0.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--auth0-button-background);font-family:Roboto;border:1px solid var(--auth0--button-border-color);color:var(--auth0-button-color)}.sign-in-button.facebook.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--facebook-button-background);border-color:var(--facebook--button-border-color);font-family:"Helvetica Neue";color:var(--facebook-button-color)}.sign-in-button.google.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--google-button-background);font-family:Roboto;border:1px solid var(--google--button-border-color);color:var(--google-button-color)}.sign-in-button.oauth.sc-amplify-sign-in-button button.sc-amplify-sign-in-button{background-color:var(--oauth-button-background);color:var(--oauth--button-color)}.sign-in-button.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{position:absolute;left:0}.sign-in-button.amazon.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{padding:10px;height:32px;width:32px}.sign-in-button.auth0.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px;color:#fff}.sign-in-button.facebook.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{height:33px;width:18px;padding:10px 14px}.sign-in-button.google.sc-amplify-sign-in-button .icon.sc-amplify-sign-in-button{background-color:#fff;border-radius:4px 0 0 4px;height:28px;width:28px;padding:12px}.sign-in-button.sc-amplify-sign-in-button .content.sc-amplify-sign-in-button{text-align:center;display:block;padding:18px 0;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}';

    const AmplifySignInButton = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
      }
      render() {
        return index.h(
          "div",
          { class: `sign-in-button ${this.provider}` },
          index.h(
            "button",
            null,
            this.provider in icons.icons &&
              index.h(
                "span",
                { class: "icon" },
                index.h("amplify-icon", { name: this.provider })
              ),
            index.h("span", { class: "content" }, index.h("slot", null))
          )
        );
      }
    };
    AmplifySignInButton.style = amplifySignInButtonCss;

    exports.amplify_sign_in_button = AmplifySignInButton;

    /***/
  },

  /***/ 76349: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);

    const amplifyTooltipCss =
      ':host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-secondary-color);--color:var(--amplify-secondary-contrast);--border-color:var(--amplify-secondary-color)}.tooltip{display:inline;position:relative;font-size:var(--amplify-text-xxs);font-family:var(--font-family);margin:0 0 0 16px}.tooltip :after{background-color:var(--background-color);border-radius:2px;bottom:46px;color:var(--color);content:attr(data-text);text-decoration:none;padding:10px;left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;white-space:nowrap;opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :before{border:solid;border-color:var(--border-color) transparent transparent transparent;border-width:5px;bottom:36px;content:"";left:50%;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);position:absolute;font-size:var(--amplify-text-sm);opacity:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.tooltip :hover:after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.tooltip :hover:before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :after{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}.auto-show-tooltip :before{opacity:1;-webkit-transition-delay:1s;transition-delay:1s}';

    const AmplifyTooltip = class {
      constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** (Optional) Whether or not the tooltip should be automatically shown, i.e. not disappear when not hovered */
        this.shouldAutoShow = false;
      }
      render() {
        return index.h(
          "div",
          {
            class: { tooltip: true, "auto-show-tooltip": this.shouldAutoShow },
            "data-text": this.text,
          },
          index.h("slot", null)
        );
      }
    };
    AmplifyTooltip.style = amplifyTooltipCss;

    exports.amplify_tooltip = AmplifyTooltip;

    /***/
  },

  /***/ 79513: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    const logger = new core.Logger("auth-helpers");
    async function checkContact(user, handleAuthStateChange) {
      if (!Auth.Auth || typeof Auth.Auth.verifiedContact !== "function") {
        throw new Error(constants.NO_AUTH_MODULE_FOUND);
      }
      // If `user` is a federated user, we shouldn't call `verifiedContact`
      // since `user` isn't `CognitoUser`
      if (!isCognitoUser(user)) {
        handleAuthStateChange(authTypes.AuthState.SignedIn, user);
        return;
      }
      try {
        const data = await Auth.Auth.verifiedContact(user);
        if (!core.isEmpty(data.verified) || core.isEmpty(data.unverified)) {
          handleAuthStateChange(authTypes.AuthState.SignedIn, user);
        } else {
          const newUser = Object.assign(user, data);
          handleAuthStateChange(authTypes.AuthState.VerifyContact, newUser);
        }
      } catch (error) {
        helpers.dispatchToastHubEvent(error);
      }
    }
    const handleSignIn = async (
      username,
      password,
      handleAuthStateChange,
      usernameAlias
    ) => {
      if (!Auth.Auth || typeof Auth.Auth.signIn !== "function") {
        throw new Error(constants.NO_AUTH_MODULE_FOUND);
      }
      try {
        const user = await Auth.Auth.signIn(username, password);
        logger.debug(user);
        if (
          user.challengeName === authTypes.ChallengeName.SMSMFA ||
          user.challengeName === authTypes.ChallengeName.SoftwareTokenMFA
        ) {
          logger.debug("confirm user with " + user.challengeName);
          handleAuthStateChange(authTypes.AuthState.ConfirmSignIn, user);
        } else if (
          user.challengeName === authTypes.ChallengeName.NewPasswordRequired
        ) {
          logger.debug("require new password", user.challengeParam);
          handleAuthStateChange(authTypes.AuthState.ResetPassword, user);
        } else if (user.challengeName === authTypes.ChallengeName.MFASetup) {
          logger.debug("TOTP setup", user.challengeParam);
          handleAuthStateChange(authTypes.AuthState.TOTPSetup, user);
        } else if (
          user.challengeName === authTypes.ChallengeName.CustomChallenge &&
          user.challengeParam &&
          user.challengeParam.trigger === "true"
        ) {
          logger.debug("custom challenge", user.challengeParam);
          handleAuthStateChange(authTypes.AuthState.CustomConfirmSignIn, user);
        } else {
          await checkContact(user, handleAuthStateChange);
        }
      } catch (error) {
        if (error.code === "UserNotConfirmedException") {
          logger.debug("the user is not confirmed");
          handleAuthStateChange(authTypes.AuthState.ConfirmSignUp, {
            username,
          });
        } else if (error.code === "PasswordResetRequiredException") {
          logger.debug("the user requires a new password");
          handleAuthStateChange(authTypes.AuthState.ForgotPassword, {
            username,
          });
        } else if (
          error.code === "InvalidParameterException" &&
          password === ""
        ) {
          logger.debug("Password cannot be empty");
          error.message = Translations.Translations.EMPTY_PASSWORD;
        } else if (error.message === Translations.Translations.EMPTY_USERNAME) {
          if (usernameAlias === authTypes.UsernameAlias.email) {
            error.message = Translations.Translations.EMPTY_EMAIL;
          }
          if (usernameAlias === authTypes.UsernameAlias.phone_number) {
            error.message = Translations.Translations.EMPTY_PHONE;
          }
        }
        helpers.dispatchToastHubEvent(error);
      }
    };
    const isCognitoUser = (user) => {
      return user instanceof Auth.CognitoUser;
    };

    exports.checkContact = checkContact;
    exports.handleSignIn = handleSignIn;

    /***/
  },

  /***/ 13564: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    // TODO: Move these values to or extract them from the Cognito Provider in the Auth category for Auth V2
    (function (AuthState) {
      AuthState["SignUp"] = "signup";
      AuthState["SignOut"] = "signout";
      AuthState["SignIn"] = "signin";
      AuthState["Loading"] = "loading";
      AuthState["SignedOut"] = "signedout";
      AuthState["SignedIn"] = "signedin";
      AuthState["SigningUp"] = "signingup";
      AuthState["ConfirmSignUp"] = "confirmSignUp";
      AuthState["confirmingSignUpCustomFlow"] = "confirmsignupcustomflow";
      AuthState["ConfirmSignIn"] = "confirmSignIn";
      AuthState["confirmingSignInCustomFlow"] = "confirmingsignincustomflow";
      AuthState["VerifyingAttributes"] = "verifyingattributes";
      AuthState["ForgotPassword"] = "forgotpassword";
      AuthState["ResetPassword"] = "resettingpassword";
      AuthState["SettingMFA"] = "settingMFA";
      AuthState["TOTPSetup"] = "TOTPSetup";
      AuthState["CustomConfirmSignIn"] = "customConfirmSignIn";
      AuthState["VerifyContact"] = "verifyContact";
    })(exports.AuthState || (exports.AuthState = {}));
    (function (MfaOption) {
      MfaOption["TOTP"] = "TOTP";
      MfaOption["SMS"] = "SMS";
      MfaOption["NOMFA"] = "NOMFA";
    })(exports.MfaOption || (exports.MfaOption = {}));
    (function (ChallengeName) {
      ChallengeName["SoftwareTokenMFA"] = "SOFTWARE_TOKEN_MFA";
      ChallengeName["SMSMFA"] = "SMS_MFA";
      ChallengeName["NewPasswordRequired"] = "NEW_PASSWORD_REQUIRED";
      ChallengeName["MFASetup"] = "MFA_SETUP";
      ChallengeName["CustomChallenge"] = "CUSTOM_CHALLENGE";
    })(exports.ChallengeName || (exports.ChallengeName = {}));
    (function (AuthFormField) {
      AuthFormField["Password"] = "password";
    })(exports.AuthFormField || (exports.AuthFormField = {}));
    (function (UsernameAlias) {
      UsernameAlias["username"] = "username";
      UsernameAlias["email"] = "email";
      UsernameAlias["phone_number"] = "phone_number";
    })(exports.UsernameAlias || (exports.UsernameAlias = {}));

    /***/
  },

  /***/ 18524: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    // Dictionaries
    // fieldId constants
    const USERNAME_SUFFIX = "username";
    const EMAIL_SUFFIX = "email";
    const CODE_SUFFIX = "code";
    const PHONE_SUFFIX = "phone";
    const PASSWORD_SUFFIX = "password";
    // Country Dial Code common constants
    const COUNTRY_DIAL_CODE_SUFFIX = "country-dial-code-select";
    const COUNTRY_DIAL_CODE_DEFAULT = "+1";
    // Auth Keys
    const AUTH_SOURCE_KEY = "amplify-auth-source";
    // Error message Common Constants
    const PHONE_EMPTY_ERROR_MESSAGE = "Phone number can not be empty";
    const NO_AUTH_MODULE_FOUND =
      "No Auth module found, please ensure @aws-amplify/auth is imported";
    const NO_STORAGE_MODULE_FOUND =
      "No Storage module found, please ensure @aws-amplify/storage is imported";
    const NO_INTERACTIONS_MODULE_FOUND =
      "No Interactions module found, please ensure @aws-amplify/interactions is imported";
    // Select MFA Types Messages
    const USER_NOT_SETUP_SOFTWARE_TOKEN_MFA =
      "User has not set up software token mfa";
    const USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA =
      "User has not verified software token mfa";
    // Hub Events and Channels
    const AUTH_CHANNEL = "auth";
    const UI_AUTH_CHANNEL = "UI Auth";
    const TOAST_AUTH_ERROR_EVENT = "ToastAuthError";
    const AUTH_STATE_CHANGE_EVENT = "AuthStateChange";

    exports.AUTH_CHANNEL = AUTH_CHANNEL;
    exports.AUTH_SOURCE_KEY = AUTH_SOURCE_KEY;
    exports.AUTH_STATE_CHANGE_EVENT = AUTH_STATE_CHANGE_EVENT;
    exports.CODE_SUFFIX = CODE_SUFFIX;
    exports.COUNTRY_DIAL_CODE_DEFAULT = COUNTRY_DIAL_CODE_DEFAULT;
    exports.COUNTRY_DIAL_CODE_SUFFIX = COUNTRY_DIAL_CODE_SUFFIX;
    exports.EMAIL_SUFFIX = EMAIL_SUFFIX;
    exports.NO_AUTH_MODULE_FOUND = NO_AUTH_MODULE_FOUND;
    exports.NO_INTERACTIONS_MODULE_FOUND = NO_INTERACTIONS_MODULE_FOUND;
    exports.NO_STORAGE_MODULE_FOUND = NO_STORAGE_MODULE_FOUND;
    exports.PASSWORD_SUFFIX = PASSWORD_SUFFIX;
    exports.PHONE_EMPTY_ERROR_MESSAGE = PHONE_EMPTY_ERROR_MESSAGE;
    exports.PHONE_SUFFIX = PHONE_SUFFIX;
    exports.TOAST_AUTH_ERROR_EVENT = TOAST_AUTH_ERROR_EVENT;
    exports.UI_AUTH_CHANNEL = UI_AUTH_CHANNEL;
    exports.USERNAME_SUFFIX = USERNAME_SUFFIX;
    exports.USER_NOT_SETUP_SOFTWARE_TOKEN_MFA =
      USER_NOT_SETUP_SOFTWARE_TOKEN_MFA;
    exports.USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA =
      USER_NOT_VERIFIED_SOFTWARE_TOKEN_MFA;

    /***/
  },

  /***/ 86309: /***/ () => {
    "use strict";

    /*
 Stencil Client Patch v1.15.0 | MIT Licensed | https://stenciljs.com
 */
    var StyleNode = function () {
      (this.start = 0),
        (this.end = 0),
        (this.previous = null),
        (this.parent = null),
        (this.rules = null),
        (this.parsedCssText = ""),
        (this.cssText = ""),
        (this.atRule = !1),
        (this.type = 0),
        (this.keyframesName = ""),
        (this.selector = ""),
        (this.parsedSelector = "");
    };
    function parse(e) {
      return parseCss(lex((e = clean(e))), e);
    }
    function clean(e) {
      return e.replace(RX.comments, "").replace(RX.port, "");
    }
    function lex(e) {
      var t = new StyleNode();
      (t.start = 0), (t.end = e.length);
      for (var r = t, n = 0, s = e.length; n < s; n++)
        if (e[n] === OPEN_BRACE) {
          r.rules || (r.rules = []);
          var o = r,
            a = o.rules[o.rules.length - 1] || null;
          ((r = new StyleNode()).start = n + 1),
            (r.parent = o),
            (r.previous = a),
            o.rules.push(r);
        } else e[n] === CLOSE_BRACE && ((r.end = n + 1), (r = r.parent || t));
      return t;
    }
    function parseCss(e, t) {
      var r = t.substring(e.start, e.end - 1);
      if (((e.parsedCssText = e.cssText = r.trim()), e.parent)) {
        var n = e.previous ? e.previous.end : e.parent.start;
        r = (r = (r = _expandUnicodeEscapes(
          (r = t.substring(n, e.start - 1))
        )).replace(RX.multipleSpaces, " ")).substring(r.lastIndexOf(";") + 1);
        var s = (e.parsedSelector = e.selector = r.trim());
        (e.atRule = 0 === s.indexOf(AT_START)),
          e.atRule
            ? 0 === s.indexOf(MEDIA_START)
              ? (e.type = types.MEDIA_RULE)
              : s.match(RX.keyframesRule) &&
                ((e.type = types.KEYFRAMES_RULE),
                (e.keyframesName = e.selector.split(RX.multipleSpaces).pop()))
            : 0 === s.indexOf(VAR_START)
            ? (e.type = types.MIXIN_RULE)
            : (e.type = types.STYLE_RULE);
      }
      var o = e.rules;
      if (o)
        for (var a = 0, i = o.length, l = void 0; a < i && (l = o[a]); a++)
          parseCss(l, t);
      return e;
    }
    function _expandUnicodeEscapes(e) {
      return e.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
        for (var e = arguments[1], t = 6 - e.length; t--; ) e = "0" + e;
        return "\\" + e;
      });
    }
    var types = {
        STYLE_RULE: 1,
        KEYFRAMES_RULE: 7,
        MEDIA_RULE: 4,
        MIXIN_RULE: 1e3,
      },
      OPEN_BRACE = "{",
      CLOSE_BRACE = "}",
      RX = {
        comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        port: /@import[^;]*;/gim,
        customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        keyframesRule: /^@[^\s]*keyframes/,
        multipleSpaces: /\s+/g,
      },
      VAR_START = "--",
      MEDIA_START = "@media",
      AT_START = "@";
    function findRegex(e, t, r) {
      e.lastIndex = 0;
      var n = t.substring(r).match(e);
      if (n) {
        var s = r + n.index;
        return { start: s, end: s + n[0].length };
      }
      return null;
    }
    var VAR_USAGE_START = /\bvar\(/,
      VAR_ASSIGN_START = /\B--[\w-]+\s*:/,
      COMMENTS = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      TRAILING_LINES = /^[\t ]+\n/gm;
    function resolveVar(e, t, r) {
      return e[t] ? e[t] : r ? executeTemplate(r, e) : "";
    }
    function findVarEndIndex(e, t) {
      for (var r = 0, n = t; n < e.length; n++) {
        var s = e[n];
        if ("(" === s) r++;
        else if (")" === s && --r <= 0) return n + 1;
      }
      return n;
    }
    function parseVar(e, t) {
      var r = findRegex(VAR_USAGE_START, e, t);
      if (!r) return null;
      var n = findVarEndIndex(e, r.start),
        s = e.substring(r.end, n - 1).split(","),
        o = s[0],
        a = s.slice(1);
      return {
        start: r.start,
        end: n,
        propName: o.trim(),
        fallback: a.length > 0 ? a.join(",").trim() : void 0,
      };
    }
    function compileVar(e, t, r) {
      var n = parseVar(e, r);
      if (!n) return t.push(e.substring(r, e.length)), e.length;
      var s = n.propName,
        o = null != n.fallback ? compileTemplate(n.fallback) : void 0;
      return (
        t.push(e.substring(r, n.start), function (e) {
          return resolveVar(e, s, o);
        }),
        n.end
      );
    }
    function executeTemplate(e, t) {
      for (var r = "", n = 0; n < e.length; n++) {
        var s = e[n];
        r += "string" == typeof s ? s : s(t);
      }
      return r;
    }
    function findEndValue(e, t) {
      for (var r = !1, n = !1, s = t; s < e.length; s++) {
        var o = e[s];
        if (r) n && '"' === o && (r = !1), n || "'" !== o || (r = !1);
        else if ('"' === o) (r = !0), (n = !0);
        else if ("'" === o) (r = !0), (n = !1);
        else {
          if (";" === o) return s + 1;
          if ("}" === o) return s;
        }
      }
      return s;
    }
    function removeCustomAssigns(e) {
      for (var t = "", r = 0; ; ) {
        var n = findRegex(VAR_ASSIGN_START, e, r),
          s = n ? n.start : e.length;
        if (((t += e.substring(r, s)), !n)) break;
        r = findEndValue(e, s);
      }
      return t;
    }
    function compileTemplate(e) {
      var t = 0;
      e = removeCustomAssigns((e = e.replace(COMMENTS, ""))).replace(
        TRAILING_LINES,
        ""
      );
      for (var r = []; t < e.length; ) t = compileVar(e, r, t);
      return r;
    }
    function resolveValues(e) {
      var t = {};
      e.forEach(function (e) {
        e.declarations.forEach(function (e) {
          t[e.prop] = e.value;
        });
      });
      for (
        var r = {},
          n = Object.entries(t),
          s = function (e) {
            var t = !1;
            if (
              (n.forEach(function (e) {
                var n = e[0],
                  s = executeTemplate(e[1], r);
                s !== r[n] && ((r[n] = s), (t = !0));
              }),
              !t)
            )
              return "break";
          },
          o = 0;
        o < 10;
        o++
      ) {
        if ("break" === s()) break;
      }
      return r;
    }
    function getSelectors(e, t) {
      if ((void 0 === t && (t = 0), !e.rules)) return [];
      var r = [];
      return (
        e.rules
          .filter(function (e) {
            return e.type === types.STYLE_RULE;
          })
          .forEach(function (e) {
            var n = getDeclarations(e.cssText);
            n.length > 0 &&
              e.parsedSelector.split(",").forEach(function (e) {
                (e = e.trim()),
                  r.push({
                    selector: e,
                    declarations: n,
                    specificity: computeSpecificity(),
                    nu: t,
                  });
              }),
              t++;
          }),
        r
      );
    }
    function computeSpecificity(e) {
      return 1;
    }
    var IMPORTANT = "!important",
      FIND_DECLARATIONS =
        /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
    function getDeclarations(e) {
      for (var t, r = []; (t = FIND_DECLARATIONS.exec(e.trim())); ) {
        var n = normalizeValue(t[2]),
          s = n.value,
          o = n.important;
        r.push({ prop: t[1].trim(), value: compileTemplate(s), important: o });
      }
      return r;
    }
    function normalizeValue(e) {
      var t = (e = e.replace(/\s+/gim, " ").trim()).endsWith(IMPORTANT);
      return (
        t && (e = e.substr(0, e.length - IMPORTANT.length).trim()),
        { value: e, important: t }
      );
    }
    function getActiveSelectors(e, t, r) {
      var n = [],
        s = getScopesForElement(t, e);
      return (
        r.forEach(function (e) {
          return n.push(e);
        }),
        s.forEach(function (e) {
          return n.push(e);
        }),
        sortSelectors(
          getSelectorsForScopes(n).filter(function (t) {
            return matches(e, t.selector);
          })
        )
      );
    }
    function getScopesForElement(e, t) {
      for (var r = []; t; ) {
        var n = e.get(t);
        n && r.push(n), (t = t.parentElement);
      }
      return r;
    }
    function getSelectorsForScopes(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          t.push.apply(t, e.selectors);
        }),
        t
      );
    }
    function sortSelectors(e) {
      return (
        e.sort(function (e, t) {
          return e.specificity === t.specificity
            ? e.nu - t.nu
            : e.specificity - t.specificity;
        }),
        e
      );
    }
    function matches(e, t) {
      return ":root" === t || "html" === t || e.matches(t);
    }
    function parseCSS(e) {
      var t = parse(e),
        r = compileTemplate(e);
      return {
        original: e,
        template: r,
        selectors: getSelectors(t),
        usesCssVars: r.length > 1,
      };
    }
    function addGlobalStyle(e, t) {
      if (
        e.some(function (e) {
          return e.styleEl === t;
        })
      )
        return !1;
      var r = parseCSS(t.textContent);
      return (r.styleEl = t), e.push(r), !0;
    }
    function updateGlobalScopes(e) {
      var t = resolveValues(getSelectorsForScopes(e));
      e.forEach(function (e) {
        e.usesCssVars &&
          (e.styleEl.textContent = executeTemplate(e.template, t));
      });
    }
    function reScope(e, t) {
      var r = e.template.map(function (r) {
          return "string" == typeof r ? replaceScope(r, e.scopeId, t) : r;
        }),
        n = e.selectors.map(function (r) {
          return Object.assign(Object.assign({}, r), {
            selector: replaceScope(r.selector, e.scopeId, t),
          });
        });
      return Object.assign(Object.assign({}, e), {
        template: r,
        selectors: n,
        scopeId: t,
      });
    }
    function replaceScope(e, t, r) {
      return (e = replaceAll(e, "\\." + t, "." + r));
    }
    function replaceAll(e, t, r) {
      return e.replace(new RegExp(t, "g"), r);
    }
    function loadDocument(e, t) {
      return (
        loadDocumentStyles(e, t),
        loadDocumentLinks(e, t).then(function () {
          updateGlobalScopes(t);
        })
      );
    }
    function startWatcher(e, t) {
      "undefined" != typeof MutationObserver &&
        new MutationObserver(function () {
          loadDocumentStyles(e, t) && updateGlobalScopes(t);
        }).observe(document.head, { childList: !0 });
    }
    function loadDocumentLinks(e, t) {
      for (
        var r = [],
          n = e.querySelectorAll(
            'link[rel="stylesheet"][href]:not([data-no-shim])'
          ),
          s = 0;
        s < n.length;
        s++
      )
        r.push(addGlobalLink(e, t, n[s]));
      return Promise.all(r);
    }
    function loadDocumentStyles(e, t) {
      return Array.from(
        e.querySelectorAll("style:not([data-styles]):not([data-no-shim])")
      )
        .map(function (e) {
          return addGlobalStyle(t, e);
        })
        .some(Boolean);
    }
    function addGlobalLink(e, t, r) {
      var n = r.href;
      return fetch(n)
        .then(function (e) {
          return e.text();
        })
        .then(function (s) {
          if (hasCssVariables(s) && r.parentNode) {
            hasRelativeUrls(s) && (s = fixRelativeUrls(s, n));
            var o = e.createElement("style");
            o.setAttribute("data-styles", ""),
              (o.textContent = s),
              addGlobalStyle(t, o),
              r.parentNode.insertBefore(o, r),
              r.remove();
          }
        })
        .catch(function (e) {
          console.error(e);
        });
    }
    var CSS_VARIABLE_REGEXP = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;
    function hasCssVariables(e) {
      return e.indexOf("var(") > -1 || CSS_VARIABLE_REGEXP.test(e);
    }
    var CSS_URL_REGEXP =
      /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
    function hasRelativeUrls(e) {
      return (CSS_URL_REGEXP.lastIndex = 0), CSS_URL_REGEXP.test(e);
    }
    function fixRelativeUrls(e, t) {
      var r = t.replace(/[^/]*$/, "");
      return e.replace(CSS_URL_REGEXP, function (e, t) {
        var n = r + t;
        return e.replace(t, n);
      });
    }
    var CustomStyle = (function () {
      function e(e, t) {
        (this.win = e),
          (this.doc = t),
          (this.count = 0),
          (this.hostStyleMap = new WeakMap()),
          (this.hostScopeMap = new WeakMap()),
          (this.globalScopes = []),
          (this.scopesMap = new Map()),
          (this.didInit = !1);
      }
      return (
        (e.prototype.i = function () {
          var e = this;
          return this.didInit || !this.win.requestAnimationFrame
            ? Promise.resolve()
            : ((this.didInit = !0),
              new Promise(function (t) {
                e.win.requestAnimationFrame(function () {
                  startWatcher(e.doc, e.globalScopes),
                    loadDocument(e.doc, e.globalScopes).then(function () {
                      return t();
                    });
                });
              }));
        }),
        (e.prototype.addLink = function (e) {
          var t = this;
          return addGlobalLink(this.doc, this.globalScopes, e).then(
            function () {
              t.updateGlobal();
            }
          );
        }),
        (e.prototype.addGlobalStyle = function (e) {
          addGlobalStyle(this.globalScopes, e) && this.updateGlobal();
        }),
        (e.prototype.createHostStyle = function (e, t, r, n) {
          if (this.hostScopeMap.has(e))
            throw new Error("host style already created");
          var s = this.registerHostTemplate(r, t, n),
            o = this.doc.createElement("style");
          return (
            o.setAttribute("data-no-shim", ""),
            s.usesCssVars
              ? n
                ? ((o["s-sc"] = t = s.scopeId + "-" + this.count),
                  (o.textContent = "/*needs update*/"),
                  this.hostStyleMap.set(e, o),
                  this.hostScopeMap.set(e, reScope(s, t)),
                  this.count++)
                : ((s.styleEl = o),
                  s.usesCssVars ||
                    (o.textContent = executeTemplate(s.template, {})),
                  this.globalScopes.push(s),
                  this.updateGlobal(),
                  this.hostScopeMap.set(e, s))
              : (o.textContent = r),
            o
          );
        }),
        (e.prototype.removeHost = function (e) {
          var t = this.hostStyleMap.get(e);
          t && t.remove(),
            this.hostStyleMap.delete(e),
            this.hostScopeMap.delete(e);
        }),
        (e.prototype.updateHost = function (e) {
          var t = this.hostScopeMap.get(e);
          if (t && t.usesCssVars && t.isScoped) {
            var r = this.hostStyleMap.get(e);
            if (r) {
              var n = resolveValues(
                getActiveSelectors(e, this.hostScopeMap, this.globalScopes)
              );
              r.textContent = executeTemplate(t.template, n);
            }
          }
        }),
        (e.prototype.updateGlobal = function () {
          updateGlobalScopes(this.globalScopes);
        }),
        (e.prototype.registerHostTemplate = function (e, t, r) {
          var n = this.scopesMap.get(t);
          return (
            n ||
              (((n = parseCSS(e)).scopeId = t),
              (n.isScoped = r),
              this.scopesMap.set(t, n)),
            n
          );
        }),
        e
      );
    })();
    !(function (e) {
      !e ||
        e.__cssshim ||
        (e.CSS && e.CSS.supports && e.CSS.supports("color", "var(--c)")) ||
        (e.__cssshim = new CustomStyle(e, e.document));
    })("undefined" != typeof window && window);

    /***/
  },

  /***/ 36099: /***/ () => {
    "use strict";

    /*
 Stencil Client Patch v1.15.0 | MIT Licensed | https://stenciljs.com
 */
    (function () {
      var aa = new Set(
        "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(
          " "
        )
      );
      function g(a) {
        var b = aa.has(a);
        a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
        return !b && a;
      }
      function l(a) {
        var b = a.isConnected;
        if (void 0 !== b) return b;
        for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
          a =
            a.parentNode ||
            (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
        return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
      }
      function n(a, b) {
        for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
        return b && b !== a ? b.nextSibling : null;
      }
      function p(a, b, d) {
        d = void 0 === d ? new Set() : d;
        for (var c = a; c; ) {
          if (c.nodeType === Node.ELEMENT_NODE) {
            var e = c;
            b(e);
            var f = e.localName;
            if ("link" === f && "import" === e.getAttribute("rel")) {
              c = e.import;
              if (c instanceof Node && !d.has(c))
                for (d.add(c), c = c.firstChild; c; c = c.nextSibling)
                  p(c, b, d);
              c = n(a, e);
              continue;
            } else if ("template" === f) {
              c = n(a, e);
              continue;
            }
            if ((e = e.__CE_shadowRoot))
              for (e = e.firstChild; e; e = e.nextSibling) p(e, b, d);
          }
          c = c.firstChild ? c.firstChild : n(a, c);
        }
      }
      function r(a, b, d) {
        a[b] = d;
      }
      function u() {
        this.a = new Map();
        this.g = new Map();
        this.c = [];
        this.f = [];
        this.b = !1;
      }
      function ba(a, b, d) {
        a.a.set(b, d);
        a.g.set(d.constructorFunction, d);
      }
      function ca(a, b) {
        a.b = !0;
        a.c.push(b);
      }
      function da(a, b) {
        a.b = !0;
        a.f.push(b);
      }
      function v(a, b) {
        a.b &&
          p(b, function (b) {
            return w(a, b);
          });
      }
      function w(a, b) {
        if (a.b && !b.__CE_patched) {
          b.__CE_patched = !0;
          for (var d = 0; d < a.c.length; d++) a.c[d](b);
          for (d = 0; d < a.f.length; d++) a.f[d](b);
        }
      }
      function x(a, b) {
        var d = [];
        p(b, function (b) {
          return d.push(b);
        });
        for (b = 0; b < d.length; b++) {
          var c = d[b];
          1 === c.__CE_state ? a.connectedCallback(c) : y(a, c);
        }
      }
      function z(a, b) {
        var d = [];
        p(b, function (b) {
          return d.push(b);
        });
        for (b = 0; b < d.length; b++) {
          var c = d[b];
          1 === c.__CE_state && a.disconnectedCallback(c);
        }
      }
      function A(a, b, d) {
        d = void 0 === d ? {} : d;
        var c = d.u || new Set(),
          e =
            d.i ||
            function (b) {
              return y(a, b);
            },
          f = [];
        p(
          b,
          function (b) {
            if ("link" === b.localName && "import" === b.getAttribute("rel")) {
              var d = b.import;
              d instanceof Node &&
                ((d.__CE_isImportDocument = !0), (d.__CE_hasRegistry = !0));
              d && "complete" === d.readyState
                ? (d.__CE_documentLoadHandled = !0)
                : b.addEventListener("load", function () {
                    var d = b.import;
                    if (!d.__CE_documentLoadHandled) {
                      d.__CE_documentLoadHandled = !0;
                      var f = new Set(c);
                      f.delete(d);
                      A(a, d, { u: f, i: e });
                    }
                  });
            } else f.push(b);
          },
          c
        );
        if (a.b) for (b = 0; b < f.length; b++) w(a, f[b]);
        for (b = 0; b < f.length; b++) e(f[b]);
      }
      function y(a, b) {
        if (void 0 === b.__CE_state) {
          var d = b.ownerDocument;
          if (d.defaultView || (d.__CE_isImportDocument && d.__CE_hasRegistry))
            if ((d = a.a.get(b.localName))) {
              d.constructionStack.push(b);
              var c = d.constructorFunction;
              try {
                try {
                  if (new c() !== b)
                    throw Error(
                      "The custom element constructor did not produce the element being upgraded."
                    );
                } finally {
                  d.constructionStack.pop();
                }
              } catch (t) {
                throw ((b.__CE_state = 2), t);
              }
              b.__CE_state = 1;
              b.__CE_definition = d;
              if (d.attributeChangedCallback)
                for (d = d.observedAttributes, c = 0; c < d.length; c++) {
                  var e = d[c],
                    f = b.getAttribute(e);
                  null !== f && a.attributeChangedCallback(b, e, null, f, null);
                }
              l(b) && a.connectedCallback(b);
            }
        }
      }
      u.prototype.connectedCallback = function (a) {
        var b = a.__CE_definition;
        b.connectedCallback && b.connectedCallback.call(a);
      };
      u.prototype.disconnectedCallback = function (a) {
        var b = a.__CE_definition;
        b.disconnectedCallback && b.disconnectedCallback.call(a);
      };
      u.prototype.attributeChangedCallback = function (a, b, d, c, e) {
        var f = a.__CE_definition;
        f.attributeChangedCallback &&
          -1 < f.observedAttributes.indexOf(b) &&
          f.attributeChangedCallback.call(a, b, d, c, e);
      };
      function B(a) {
        var b = document;
        this.c = a;
        this.a = b;
        this.b = void 0;
        A(this.c, this.a);
        "loading" === this.a.readyState &&
          ((this.b = new MutationObserver(this.f.bind(this))),
          this.b.observe(this.a, { childList: !0, subtree: !0 }));
      }
      function C(a) {
        a.b && a.b.disconnect();
      }
      B.prototype.f = function (a) {
        var b = this.a.readyState;
        ("interactive" !== b && "complete" !== b) || C(this);
        for (b = 0; b < a.length; b++)
          for (var d = a[b].addedNodes, c = 0; c < d.length; c++)
            A(this.c, d[c]);
      };
      function ea() {
        var a = this;
        this.b = this.a = void 0;
        this.c = new Promise(function (b) {
          a.b = b;
          a.a && b(a.a);
        });
      }
      function D(a) {
        if (a.a) throw Error("Already resolved.");
        a.a = void 0;
        a.b && a.b(void 0);
      }
      function E(a) {
        this.c = !1;
        this.a = a;
        this.j = new Map();
        this.f = function (b) {
          return b();
        };
        this.b = !1;
        this.g = [];
        this.o = new B(a);
      }
      E.prototype.l = function (a, b) {
        var d = this;
        if (!(b instanceof Function))
          throw new TypeError("Custom element constructors must be functions.");
        if (!g(a))
          throw new SyntaxError("The element name '" + a + "' is not valid.");
        if (this.a.a.get(a))
          throw Error(
            "A custom element with name '" + a + "' has already been defined."
          );
        if (this.c) throw Error("A custom element is already being defined.");
        this.c = !0;
        try {
          var c = function (b) {
              var a = e[b];
              if (void 0 !== a && !(a instanceof Function))
                throw Error("The '" + b + "' callback must be a function.");
              return a;
            },
            e = b.prototype;
          if (!(e instanceof Object))
            throw new TypeError(
              "The custom element constructor's prototype is not an object."
            );
          var f = c("connectedCallback");
          var t = c("disconnectedCallback");
          var k = c("adoptedCallback");
          var h = c("attributeChangedCallback");
          var m = b.observedAttributes || [];
        } catch (q) {
          return;
        } finally {
          this.c = !1;
        }
        b = {
          localName: a,
          constructorFunction: b,
          connectedCallback: f,
          disconnectedCallback: t,
          adoptedCallback: k,
          attributeChangedCallback: h,
          observedAttributes: m,
          constructionStack: [],
        };
        ba(this.a, a, b);
        this.g.push(b);
        this.b ||
          ((this.b = !0),
          this.f(function () {
            return fa(d);
          }));
      };
      E.prototype.i = function (a) {
        A(this.a, a);
      };
      function fa(a) {
        if (!1 !== a.b) {
          a.b = !1;
          for (var b = a.g, d = [], c = new Map(), e = 0; e < b.length; e++)
            c.set(b[e].localName, []);
          A(a.a, document, {
            i: function (b) {
              if (void 0 === b.__CE_state) {
                var e = b.localName,
                  f = c.get(e);
                f ? f.push(b) : a.a.a.get(e) && d.push(b);
              }
            },
          });
          for (e = 0; e < d.length; e++) y(a.a, d[e]);
          for (; 0 < b.length; ) {
            var f = b.shift();
            e = f.localName;
            f = c.get(f.localName);
            for (var t = 0; t < f.length; t++) y(a.a, f[t]);
            (e = a.j.get(e)) && D(e);
          }
        }
      }
      E.prototype.get = function (a) {
        if ((a = this.a.a.get(a))) return a.constructorFunction;
      };
      E.prototype.m = function (a) {
        if (!g(a))
          return Promise.reject(
            new SyntaxError("'" + a + "' is not a valid custom element name.")
          );
        var b = this.j.get(a);
        if (b) return b.c;
        b = new ea();
        this.j.set(a, b);
        this.a.a.get(a) &&
          !this.g.some(function (b) {
            return b.localName === a;
          }) &&
          D(b);
        return b.c;
      };
      E.prototype.s = function (a) {
        C(this.o);
        var b = this.f;
        this.f = function (d) {
          return a(function () {
            return b(d);
          });
        };
      };
      window.CustomElementRegistry = E;
      E.prototype.define = E.prototype.l;
      E.prototype.upgrade = E.prototype.i;
      E.prototype.get = E.prototype.get;
      E.prototype.whenDefined = E.prototype.m;
      E.prototype.polyfillWrapFlushCallback = E.prototype.s;
      var F = window.Document.prototype.createElement,
        G = window.Document.prototype.createElementNS,
        ha = window.Document.prototype.importNode,
        ia = window.Document.prototype.prepend,
        ja = window.Document.prototype.append,
        ka = window.DocumentFragment.prototype.prepend,
        la = window.DocumentFragment.prototype.append,
        H = window.Node.prototype.cloneNode,
        I = window.Node.prototype.appendChild,
        J = window.Node.prototype.insertBefore,
        K = window.Node.prototype.removeChild,
        L = window.Node.prototype.replaceChild,
        M = Object.getOwnPropertyDescriptor(
          window.Node.prototype,
          "textContent"
        ),
        N = window.Element.prototype.attachShadow,
        O = Object.getOwnPropertyDescriptor(
          window.Element.prototype,
          "innerHTML"
        ),
        P = window.Element.prototype.getAttribute,
        Q = window.Element.prototype.setAttribute,
        R = window.Element.prototype.removeAttribute,
        S = window.Element.prototype.getAttributeNS,
        T = window.Element.prototype.setAttributeNS,
        U = window.Element.prototype.removeAttributeNS,
        ma = window.Element.prototype.insertAdjacentElement,
        na = window.Element.prototype.insertAdjacentHTML,
        oa = window.Element.prototype.prepend,
        pa = window.Element.prototype.append,
        V = window.Element.prototype.before,
        qa = window.Element.prototype.after,
        ra = window.Element.prototype.replaceWith,
        sa = window.Element.prototype.remove,
        ta = window.HTMLElement,
        W = Object.getOwnPropertyDescriptor(
          window.HTMLElement.prototype,
          "innerHTML"
        ),
        ua = window.HTMLElement.prototype.insertAdjacentElement,
        va = window.HTMLElement.prototype.insertAdjacentHTML;
      var wa = new (function () {})();
      function xa() {
        var a = X;
        window.HTMLElement = (function () {
          function b() {
            var b = this.constructor,
              c = a.g.get(b);
            if (!c)
              throw Error(
                "The custom element being constructed was not registered with `customElements`."
              );
            var e = c.constructionStack;
            if (0 === e.length)
              return (
                (e = F.call(document, c.localName)),
                Object.setPrototypeOf(e, b.prototype),
                (e.__CE_state = 1),
                (e.__CE_definition = c),
                w(a, e),
                e
              );
            c = e.length - 1;
            var f = e[c];
            if (f === wa)
              throw Error(
                "The HTMLElement constructor was either called reentrantly for this constructor or called multiple times."
              );
            e[c] = wa;
            Object.setPrototypeOf(f, b.prototype);
            w(a, f);
            return f;
          }
          b.prototype = ta.prototype;
          Object.defineProperty(b.prototype, "constructor", {
            writable: !0,
            configurable: !0,
            enumerable: !1,
            value: b,
          });
          return b;
        })();
      }
      function Y(a, b, d) {
        function c(b) {
          return function (d) {
            for (var e = [], c = 0; c < arguments.length; ++c)
              e[c] = arguments[c];
            c = [];
            for (var f = [], m = 0; m < e.length; m++) {
              var q = e[m];
              q instanceof Element && l(q) && f.push(q);
              if (q instanceof DocumentFragment)
                for (q = q.firstChild; q; q = q.nextSibling) c.push(q);
              else c.push(q);
            }
            b.apply(this, e);
            for (e = 0; e < f.length; e++) z(a, f[e]);
            if (l(this))
              for (e = 0; e < c.length; e++)
                (f = c[e]), f instanceof Element && x(a, f);
          };
        }
        void 0 !== d.h && (b.prepend = c(d.h));
        void 0 !== d.append && (b.append = c(d.append));
      }
      function ya() {
        var a = X;
        r(Document.prototype, "createElement", function (b) {
          if (this.__CE_hasRegistry) {
            var d = a.a.get(b);
            if (d) return new d.constructorFunction();
          }
          b = F.call(this, b);
          w(a, b);
          return b;
        });
        r(Document.prototype, "importNode", function (b, d) {
          b = ha.call(this, b, !!d);
          this.__CE_hasRegistry ? A(a, b) : v(a, b);
          return b;
        });
        r(Document.prototype, "createElementNS", function (b, d) {
          if (
            this.__CE_hasRegistry &&
            (null === b || "http://www.w3.org/1999/xhtml" === b)
          ) {
            var c = a.a.get(d);
            if (c) return new c.constructorFunction();
          }
          b = G.call(this, b, d);
          w(a, b);
          return b;
        });
        Y(a, Document.prototype, { h: ia, append: ja });
      }
      function za() {
        function a(a, c) {
          Object.defineProperty(a, "textContent", {
            enumerable: c.enumerable,
            configurable: !0,
            get: c.get,
            set: function (a) {
              if (this.nodeType === Node.TEXT_NODE) c.set.call(this, a);
              else {
                var d = void 0;
                if (this.firstChild) {
                  var e = this.childNodes,
                    k = e.length;
                  if (0 < k && l(this)) {
                    d = Array(k);
                    for (var h = 0; h < k; h++) d[h] = e[h];
                  }
                }
                c.set.call(this, a);
                if (d) for (a = 0; a < d.length; a++) z(b, d[a]);
              }
            },
          });
        }
        var b = X;
        r(Node.prototype, "insertBefore", function (a, c) {
          if (a instanceof DocumentFragment) {
            var e = Array.prototype.slice.apply(a.childNodes);
            a = J.call(this, a, c);
            if (l(this)) for (c = 0; c < e.length; c++) x(b, e[c]);
            return a;
          }
          e = l(a);
          c = J.call(this, a, c);
          e && z(b, a);
          l(this) && x(b, a);
          return c;
        });
        r(Node.prototype, "appendChild", function (a) {
          if (a instanceof DocumentFragment) {
            var c = Array.prototype.slice.apply(a.childNodes);
            a = I.call(this, a);
            if (l(this)) for (var e = 0; e < c.length; e++) x(b, c[e]);
            return a;
          }
          c = l(a);
          e = I.call(this, a);
          c && z(b, a);
          l(this) && x(b, a);
          return e;
        });
        r(Node.prototype, "cloneNode", function (a) {
          a = H.call(this, !!a);
          this.ownerDocument.__CE_hasRegistry ? A(b, a) : v(b, a);
          return a;
        });
        r(Node.prototype, "removeChild", function (a) {
          var c = l(a),
            e = K.call(this, a);
          c && z(b, a);
          return e;
        });
        r(Node.prototype, "replaceChild", function (a, c) {
          if (a instanceof DocumentFragment) {
            var e = Array.prototype.slice.apply(a.childNodes);
            a = L.call(this, a, c);
            if (l(this)) for (z(b, c), c = 0; c < e.length; c++) x(b, e[c]);
            return a;
          }
          e = l(a);
          var f = L.call(this, a, c),
            d = l(this);
          d && z(b, c);
          e && z(b, a);
          d && x(b, a);
          return f;
        });
        M && M.get
          ? a(Node.prototype, M)
          : ca(b, function (b) {
              a(b, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  for (var a = [], b = 0; b < this.childNodes.length; b++) {
                    var f = this.childNodes[b];
                    f.nodeType !== Node.COMMENT_NODE && a.push(f.textContent);
                  }
                  return a.join("");
                },
                set: function (a) {
                  for (; this.firstChild; ) K.call(this, this.firstChild);
                  null != a &&
                    "" !== a &&
                    I.call(this, document.createTextNode(a));
                },
              });
            });
      }
      function Aa(a) {
        function b(b) {
          return function (e) {
            for (var c = [], d = 0; d < arguments.length; ++d)
              c[d] = arguments[d];
            d = [];
            for (var k = [], h = 0; h < c.length; h++) {
              var m = c[h];
              m instanceof Element && l(m) && k.push(m);
              if (m instanceof DocumentFragment)
                for (m = m.firstChild; m; m = m.nextSibling) d.push(m);
              else d.push(m);
            }
            b.apply(this, c);
            for (c = 0; c < k.length; c++) z(a, k[c]);
            if (l(this))
              for (c = 0; c < d.length; c++)
                (k = d[c]), k instanceof Element && x(a, k);
          };
        }
        var d = Element.prototype;
        void 0 !== V && (d.before = b(V));
        void 0 !== V && (d.after = b(qa));
        void 0 !== ra &&
          r(d, "replaceWith", function (b) {
            for (var e = [], c = 0; c < arguments.length; ++c)
              e[c] = arguments[c];
            c = [];
            for (var d = [], k = 0; k < e.length; k++) {
              var h = e[k];
              h instanceof Element && l(h) && d.push(h);
              if (h instanceof DocumentFragment)
                for (h = h.firstChild; h; h = h.nextSibling) c.push(h);
              else c.push(h);
            }
            k = l(this);
            ra.apply(this, e);
            for (e = 0; e < d.length; e++) z(a, d[e]);
            if (k)
              for (z(a, this), e = 0; e < c.length; e++)
                (d = c[e]), d instanceof Element && x(a, d);
          });
        void 0 !== sa &&
          r(d, "remove", function () {
            var b = l(this);
            sa.call(this);
            b && z(a, this);
          });
      }
      function Ba() {
        function a(a, b) {
          Object.defineProperty(a, "innerHTML", {
            enumerable: b.enumerable,
            configurable: !0,
            get: b.get,
            set: function (a) {
              var e = this,
                d = void 0;
              l(this) &&
                ((d = []),
                p(this, function (a) {
                  a !== e && d.push(a);
                }));
              b.set.call(this, a);
              if (d)
                for (var f = 0; f < d.length; f++) {
                  var t = d[f];
                  1 === t.__CE_state && c.disconnectedCallback(t);
                }
              this.ownerDocument.__CE_hasRegistry ? A(c, this) : v(c, this);
              return a;
            },
          });
        }
        function b(a, b) {
          r(a, "insertAdjacentElement", function (a, e) {
            var d = l(e);
            a = b.call(this, a, e);
            d && z(c, e);
            l(a) && x(c, e);
            return a;
          });
        }
        function d(a, b) {
          function e(a, b) {
            for (var e = []; a !== b; a = a.nextSibling) e.push(a);
            for (b = 0; b < e.length; b++) A(c, e[b]);
          }
          r(a, "insertAdjacentHTML", function (a, c) {
            a = a.toLowerCase();
            if ("beforebegin" === a) {
              var d = this.previousSibling;
              b.call(this, a, c);
              e(d || this.parentNode.firstChild, this);
            } else if ("afterbegin" === a)
              (d = this.firstChild), b.call(this, a, c), e(this.firstChild, d);
            else if ("beforeend" === a)
              (d = this.lastChild),
                b.call(this, a, c),
                e(d || this.firstChild, null);
            else if ("afterend" === a)
              (d = this.nextSibling),
                b.call(this, a, c),
                e(this.nextSibling, d);
            else
              throw new SyntaxError(
                "The value provided (" +
                  String(a) +
                  ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
              );
          });
        }
        var c = X;
        N &&
          r(Element.prototype, "attachShadow", function (a) {
            a = N.call(this, a);
            var b = c;
            if (b.b && !a.__CE_patched) {
              a.__CE_patched = !0;
              for (var e = 0; e < b.c.length; e++) b.c[e](a);
            }
            return (this.__CE_shadowRoot = a);
          });
        O && O.get
          ? a(Element.prototype, O)
          : W && W.get
          ? a(HTMLElement.prototype, W)
          : da(c, function (b) {
              a(b, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  return H.call(this, !0).innerHTML;
                },
                set: function (a) {
                  var b = "template" === this.localName,
                    c = b ? this.content : this,
                    e = G.call(document, this.namespaceURI, this.localName);
                  for (e.innerHTML = a; 0 < c.childNodes.length; )
                    K.call(c, c.childNodes[0]);
                  for (a = b ? e.content : e; 0 < a.childNodes.length; )
                    I.call(c, a.childNodes[0]);
                },
              });
            });
        r(Element.prototype, "setAttribute", function (a, b) {
          if (1 !== this.__CE_state) return Q.call(this, a, b);
          var e = P.call(this, a);
          Q.call(this, a, b);
          b = P.call(this, a);
          c.attributeChangedCallback(this, a, e, b, null);
        });
        r(Element.prototype, "setAttributeNS", function (a, b, d) {
          if (1 !== this.__CE_state) return T.call(this, a, b, d);
          var e = S.call(this, a, b);
          T.call(this, a, b, d);
          d = S.call(this, a, b);
          c.attributeChangedCallback(this, b, e, d, a);
        });
        r(Element.prototype, "removeAttribute", function (a) {
          if (1 !== this.__CE_state) return R.call(this, a);
          var b = P.call(this, a);
          R.call(this, a);
          null !== b && c.attributeChangedCallback(this, a, b, null, null);
        });
        r(Element.prototype, "removeAttributeNS", function (a, b) {
          if (1 !== this.__CE_state) return U.call(this, a, b);
          var d = S.call(this, a, b);
          U.call(this, a, b);
          var e = S.call(this, a, b);
          d !== e && c.attributeChangedCallback(this, b, d, e, a);
        });
        ua
          ? b(HTMLElement.prototype, ua)
          : ma
          ? b(Element.prototype, ma)
          : console.warn(
              "Custom Elements: `Element#insertAdjacentElement` was not patched."
            );
        va
          ? d(HTMLElement.prototype, va)
          : na
          ? d(Element.prototype, na)
          : console.warn(
              "Custom Elements: `Element#insertAdjacentHTML` was not patched."
            );
        Y(c, Element.prototype, { h: oa, append: pa });
        Aa(c);
      }
      var Z = window.customElements;
      if (
        !Z ||
        Z.forcePolyfill ||
        "function" != typeof Z.define ||
        "function" != typeof Z.get
      ) {
        var X = new u();
        xa();
        ya();
        Y(X, DocumentFragment.prototype, { h: ka, append: la });
        za();
        Ba();
        document.__CE_hasRegistry = !0;
        var customElements = new E(X);
        Object.defineProperty(window, "customElements", {
          configurable: !0,
          enumerable: !0,
          value: customElements,
        });
      }
    }.call(self));

    // Polyfill document.baseURI
    "string" !== typeof document.baseURI &&
      Object.defineProperty(Document.prototype, "baseURI", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          var a = document.querySelector("base");
          return a && a.href ? a.href : document.URL;
        },
      });

    // Polyfill CustomEvent
    "function" !== typeof window.CustomEvent &&
      ((window.CustomEvent = function (c, a) {
        a = a || { bubbles: !1, cancelable: !1, detail: void 0 };
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent(c, a.bubbles, a.cancelable, a.detail);
        return b;
      }),
      (window.CustomEvent.prototype = window.Event.prototype));

    // Event.composedPath
    (function (b, c, d) {
      b.composedPath ||
        (b.composedPath = function () {
          if (this.path) return this.path;
          var a = this.target;
          for (this.path = []; null !== a.parentNode; )
            this.path.push(a), (a = a.parentNode);
          this.path.push(c, d);
          return this.path;
        });
    })(Event.prototype, document, window);

    /*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
    (function (a) {
      "function" !== typeof a.matches &&
        (a.matches =
          a.msMatchesSelector ||
          a.mozMatchesSelector ||
          a.webkitMatchesSelector ||
          function (a) {
            a = (this.document || this.ownerDocument).querySelectorAll(a);
            for (var b = 0; a[b] && a[b] !== this; ) ++b;
            return !!a[b];
          });
      "function" !== typeof a.closest &&
        (a.closest = function (a) {
          for (var b = this; b && 1 === b.nodeType; ) {
            if (b.matches(a)) return b;
            b = b.parentNode;
          }
          return null;
        });
    })(window.Element.prototype);

    /*!
Element.getRootNode()
*/
    (function (c) {
      function d(a) {
        a = b(a);
        return a && 11 === a.nodeType ? d(a.host) : a;
      }
      function b(a) {
        return a && a.parentNode ? b(a.parentNode) : a;
      }
      "function" !== typeof c.getRootNode &&
        (c.getRootNode = function (a) {
          return a && a.composed ? d(this) : b(this);
        });
    })(Element.prototype);

    /*!
Element.isConnected()
*/
    (function (a) {
      "isConnected" in a ||
        Object.defineProperty(a, "isConnected", {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var a = this.getRootNode({ composed: !0 });
            return a && 9 === a.nodeType;
          },
        });
    })(Element.prototype);

    /*!
Element.remove()
*/
    (function (b) {
      b.forEach(function (a) {
        a.hasOwnProperty("remove") ||
          Object.defineProperty(a, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
              null !== this.parentNode && this.parentNode.removeChild(this);
            },
          });
      });
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

    /*!
Element.classList
*/
    !(function (e) {
      "classList" in e ||
        Object.defineProperty(e, "classList", {
          get: function () {
            var e = this,
              t = (e.getAttribute("class") || "")
                .replace(/^\s+|\s$/g, "")
                .split(/\s+/g);
            function n() {
              t.length > 0
                ? e.setAttribute("class", t.join(" "))
                : e.removeAttribute("class");
            }
            return (
              "" === t[0] && t.splice(0, 1),
              (t.toggle = function (e, i) {
                void 0 !== i
                  ? i
                    ? t.add(e)
                    : t.remove(e)
                  : -1 !== t.indexOf(e)
                  ? t.splice(t.indexOf(e), 1)
                  : t.push(e),
                  n();
              }),
              (t.add = function () {
                for (
                  var e = [].slice.call(arguments), i = 0, s = e.length;
                  i < s;
                  i++
                )
                  -1 === t.indexOf(e[i]) && t.push(e[i]);
                n();
              }),
              (t.remove = function () {
                for (
                  var e = [].slice.call(arguments), i = 0, s = e.length;
                  i < s;
                  i++
                )
                  -1 !== t.indexOf(e[i]) && t.splice(t.indexOf(e[i]), 1);
                n();
              }),
              (t.item = function (e) {
                return t[e];
              }),
              (t.contains = function (e) {
                return -1 !== t.indexOf(e);
              }),
              (t.replace = function (e, i) {
                -1 !== t.indexOf(e) && t.splice(t.indexOf(e), 1, i), n();
              }),
              (t.value = e.getAttribute("class") || ""),
              t
            );
          },
        });
    })(Element.prototype);

    /*!
DOMTokenList
*/
    (function (b) {
      try {
        document.body.classList.add();
      } catch (e) {
        var c = b.add,
          d = b.remove;
        b.add = function () {
          for (var a = 0; a < arguments.length; a++) c.call(this, arguments[a]);
        };
        b.remove = function () {
          for (var a = 0; a < arguments.length; a++) d.call(this, arguments[a]);
        };
      }
    })(DOMTokenList.prototype);

    /***/
  },

  /***/ 30924: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex
        ? ex["default"]
        : ex;
    }

    const core = __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const Auth = __webpack_require__(67375);
    const Auth__default = _interopDefault(Auth);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);

    const logger = new core.Logger("helpers");
    /**
     * Finds closest element that matches the selector from the ancestor tree.
     * Trasverses through shadow DOM and slots.
     *
     * Adpated from: https://stackoverflow.com/a/56105394
     */
    const closestElement = (selector, base) => {
      function _closestFrom(el) {
        if (!el || el === document || el === window) return null;
        if (el.matches(selector)) return base; // return if current element matches the selector
        if (el.assignedSlot) el = el.assignedSlot; // traverse up slots if slotted
        const found = el.closest(selector);
        return found ? found : _closestFrom(el.getRootNode().host); // try to traverse up shadows
      }
      return _closestFrom(base);
    };
    const dispatchToastHubEvent = (error) => {
      core.Hub.dispatch(constants.UI_AUTH_CHANNEL, {
        event: constants.TOAST_AUTH_ERROR_EVENT,
        message: core.I18n.get(error.message),
      });
    };
    const dispatchAuthStateChangeEvent = (nextAuthState, data) => {
      core.Hub.dispatch(constants.UI_AUTH_CHANNEL, {
        event: constants.AUTH_STATE_CHANGE_EVENT,
        message: nextAuthState,
        data,
      });
    };
    const composePhoneNumberInput = (phoneNumber) => {
      if (!phoneNumber.phoneNumberValue) {
        throw new Error(constants.PHONE_EMPTY_ERROR_MESSAGE);
      }
      const sanitizedPhoneNumberValue = phoneNumber.phoneNumberValue.replace(
        /[-()\s]/g,
        ""
      );
      return `${phoneNumber.countryDialCodeValue}${sanitizedPhoneNumberValue}`;
    };
    const checkUsernameAlias = (usernameAlias) => {
      if (!(usernameAlias in authTypes.UsernameAlias)) {
        throw new Error(
          `Invalid username Alias - ${usernameAlias}. Instead use ${Object.values(
            authTypes.UsernameAlias
          )}`
        );
      }
    };
    const onAuthUIStateChange = (authStateHandler) => {
      const authUIStateHandler = async (data) => {
        const { payload } = data;
        switch (payload.event) {
          case constants.AUTH_STATE_CHANGE_EVENT:
            if (payload.message) {
              if (payload.message === authTypes.AuthState.SignedIn) {
                // for AuthState.SignedIn, use an Auth Guard
                try {
                  const user = await Auth__default.currentAuthenticatedUser();
                  authStateHandler(payload.message, user);
                } catch (e) {
                  logger.error("User is not authenticated");
                }
              } else {
                authStateHandler(payload.message, payload.data);
              }
            }
            break;
        }
      };
      core.Hub.listen(constants.UI_AUTH_CHANNEL, authUIStateHandler);
      const unsubscribe = () => {
        // Replace user's `authStateHandler` with a noop so that we don't trigger side-effects during the async `authUIStateHandler` when unsubscribed
        authStateHandler = () => {};
        core.Hub.remove(constants.UI_AUTH_CHANNEL, authUIStateHandler);
      };
      return unsubscribe;
    };
    const isHintValid = (field) => {
      return !(field["hint"] === null || typeof field["hint"] === "string");
    };
    // Required attributes come from https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
    const getRequiredAttributesMap = () => ({
      address: {
        label: core.I18n.get(Translations.Translations.ADDRESS_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.ADDRESS_PLACEHOLDER
        ),
      },
      nickname: {
        label: core.I18n.get(Translations.Translations.NICKNAME_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.NICKNAME_PLACEHOLDER
        ),
      },
      birthdate: {
        label: core.I18n.get(Translations.Translations.BIRTHDATE_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.BIRTHDATE_PLACEHOLDER
        ),
      },
      phone_number: {
        label: core.I18n.get(Translations.Translations.PHONE_LABEL),
        placeholder: core.I18n.get(Translations.Translations.PHONE_PLACEHOLDER),
      },
      email: {
        lable: core.I18n.get(Translations.Translations.EMAIL_LABEL),
        placeholder: core.I18n.get(Translations.Translations.EMAIL_PLACEHOLDER),
      },
      picture: {
        label: core.I18n.get(Translations.Translations.PICTURE_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.PICTURE_PLACEHOLDER
        ),
      },
      family_name: {
        label: core.I18n.get(Translations.Translations.FAMILY_NAME_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.FAMILY_NAME_PLACEHOLDER
        ),
      },
      preferred_username: {
        label: core.I18n.get(
          Translations.Translations.PREFERRED_USERNAME_LABEL
        ),
        placeholder: core.I18n.get(
          Translations.Translations.PREFERRED_USERNAME_PLACEHOLDER
        ),
      },
      gender: {
        label: core.I18n.get(Translations.Translations.GENDER_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.GENDER_PLACEHOLDER
        ),
      },
      profile: {
        label: core.I18n.get(Translations.Translations.PROFILE_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.PROFILE_PLACEHOLDER
        ),
      },
      given_name: {
        label: core.I18n.get(Translations.Translations.GIVEN_NAME_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.GIVEN_NAME_PLACEHOLDER
        ),
      },
      zoneinfo: {
        label: core.I18n.get(Translations.Translations.ZONEINFO_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.ZONEINFO_PLACEHOLDER
        ),
      },
      locale: {
        label: core.I18n.get(Translations.Translations.LOCALE_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.LOCALE_PLACEHOLDER
        ),
      },
      updated_at: {
        label: core.I18n.get(Translations.Translations.UPDATED_AT_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.UPDATED_AT_PLACEHOLDER
        ),
      },
      middle_name: {
        label: core.I18n.get(Translations.Translations.MIDDLE_NAME_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.MIDDLE_NAME_PLACEHOLDER
        ),
      },
      website: {
        label: core.I18n.get(Translations.Translations.WEBSITE_LABEL),
        placeholder: core.I18n.get(
          Translations.Translations.WEBSITE_PLACEHOLDER
        ),
      },
      name: {
        label: core.I18n.get(Translations.Translations.NAME_LABEL),
        placeholder: core.I18n.get(Translations.Translations.NAME_PLACEHOLDER),
      },
    });
    function handlePhoneNumberChange(event, phoneNumber) {
      const name = event.target.name;
      const value = event.target.value;
      /** Cognito expects to have a string be passed when signing up. Since the Select input is separate
       * input from the phone number input, we need to first capture both components values and combined
       * them together.
       */
      if (name === constants.COUNTRY_DIAL_CODE_SUFFIX) {
        phoneNumber.countryDialCodeValue = value;
      }
      if (name === constants.PHONE_SUFFIX) {
        phoneNumber.phoneNumberValue = value;
      }
    }

    exports.checkUsernameAlias = checkUsernameAlias;
    exports.closestElement = closestElement;
    exports.composePhoneNumberInput = composePhoneNumberInput;
    exports.dispatchAuthStateChangeEvent = dispatchAuthStateChangeEvent;
    exports.dispatchToastHubEvent = dispatchToastHubEvent;
    exports.getRequiredAttributesMap = getRequiredAttributesMap;
    exports.handlePhoneNumberChange = handlePhoneNumberChange;
    exports.isHintValid = isHintValid;
    exports.onAuthUIStateChange = onAuthUIStateChange;

    /***/
  },

  /***/ 24355: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    const index = __webpack_require__(36542);

    const icons = {
      amazon() {
        return index.h(
          "svg",
          { viewBox: "0 0 248 268", xmlns: "http://www.w3.org/2000/svg" },
          index.h(
            "g",
            { id: "Artboard-Copy-2", fill: "none", "fill-rule": "evenodd" },
            index.h("path", {
              d: "M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z",
              id: "Fill-6",
              fill: "#FFF",
            })
          )
        );
      },
      auth0() {
        return index.h(
          "svg",
          {
            id: "artwork",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 193.7 216.6",
          },
          index.h("path", {
            d: "M189,66.9L167.2,0H96.8l21.8,66.9H189z M96.8,0H26.5L4.8,66.9h70.4L96.8,0z M4.8,66.9L4.8,66.9\tc-13,39.9,1.2,83.6,35.2,108.3l21.7-66.9L4.8,66.9z M189,66.9L189,66.9l-57,41.4l21.7,66.9l0,0C187.7,150.6,201.9,106.8,189,66.9\tL189,66.9z M39.9,175.2L39.9,175.2l56.9,41.4l56.9-41.4l-56.9-41.4L39.9,175.2z",
            fill: "#FFF",
          })
        );
      },
      facebook() {
        return index.h(
          "svg",
          { viewBox: "0 0 279 538", xmlns: "http://www.w3.org/2000/svg" },
          index.h(
            "g",
            { id: "Page-1", fill: "none", "fill-rule": "evenodd" },
            index.h(
              "g",
              { id: "Artboard", fill: "#FFF" },
              index.h("path", {
                d: "M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z",
                id: "Fill-1",
              })
            )
          )
        );
      },
      google() {
        return index.h(
          "svg",
          {
            viewBox: "0 0 256 262",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid",
          },
          index.h("path", {
            d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
            fill: "#4285F4",
          }),
          index.h("path", {
            d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
            fill: "#34A853",
          }),
          index.h("path", {
            d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",
            fill: "#FBBC05",
          }),
          index.h("path", {
            d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
            fill: "#EB4335",
          })
        );
      },
      "sound-mute"() {
        return index.h(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            { id: "icons/minis/volumeOff", "fill-rule": "evenodd" },
            index.h("path", {
              d: "M3.48026899,12.9630494 C3.63825091,12.9630494 3.79237961,13.0108921 3.92264322,13.1003479 L8.77467683,16.8113609 C9.29423971,17.1679383 10,16.7950396 10,16.1637406 L10,3.78619489 C10,3.15489596 9.29423971,2.78199725 8.77467683,3.13857463 L3.92264322,6.84545211 C3.79237961,6.93490793 3.63825091,6.9827506 3.48026899,6.9827506 L1.78294894,6.9827506 C1.3505185,6.9827506 1,7.33409518 1,7.76754476 L1,12.1781306 C1,12.6117048 1.3505185,12.9630494 1.78294894,12.9630494 L3.48026899,12.9630494 Z M17.2118156,7 L15.0918385,9.11997713 L12.9718614,7 L12,7.97174685 L14.1200917,10.091724 L12,12.2118156 L12.9718614,13.1835625 L15.0918385,11.0635854 L17.2118156,13.1835625 L18.1835625,12.2118156 L16.0635854,10.091724 L18.1835625,7.97174685 L17.2118156,7 Z",
              id: "Fill-2",
            })
          )
        );
      },
      sound() {
        return index.h(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            { id: "icons/minis/volumeOn", "fill-rule": "evenodd" },
            index.h("path", {
              d: "M3.48026899,12.9630494 L1.78294894,12.9630494 C1.3505185,12.9630494 1,12.6117048 1,12.1781306 L1,7.76754476 C1,7.33409518 1.3505185,6.9827506 1.78294894,6.9827506 L3.48026899,6.9827506 C3.63825091,6.9827506 3.79237961,6.93490793 3.92264322,6.84545211 L8.77467683,3.13857463 C9.29423971,2.78199725 10,3.15489596 10,3.78619489 L10,16.1637406 C10,16.7950396 9.29423971,17.1679383 8.77467683,16.8113609 L3.92264322,13.1003479 C3.79237961,13.0108921 3.63825091,12.9630494 3.48026899,12.9630494 Z M14.9270376,3.03232286 C15.1729267,3.03232286 15.4040399,3.12815658 15.5777627,3.3022351 C17.3699891,5.09889099 18.3570052,7.48235058 18.3570052,10.0135053 C18.3570052,12.54466 17.3699891,14.9281196 15.5777627,16.7247755 C15.4041045,16.898854 15.1729914,16.9947524 14.9270052,16.9947524 C14.6820861,16.9947524 14.4515549,16.899436 14.2777674,16.7263598 C13.9192316,16.3684383 13.9185203,15.7852882 14.2762477,15.4264291 C15.7222893,13.9769926 16.5186727,12.0545954 16.5186727,10.0135053 C16.5186727,7.97241524 15.7222893,6.05001801 14.2762154,4.60058152 C13.9184879,4.24175473 13.9191992,3.65857229 14.277832,3.30065081 C14.4514256,3.1275746 14.6819567,3.03232286 14.9270376,3.03232286 Z M13.5730665,6.11570485 C14.6133991,7.15574642 15.1862998,8.54003279 15.1862998,10.0134924 C15.1862998,11.4892799 14.6113945,12.8741159 13.5675376,13.9128965 C13.3942351,14.0855848 13.1639626,14.1806425 12.9191727,14.1806425 C12.6727016,14.1806425 12.4412975,14.0844531 12.2677039,13.9097926 C12.0944984,13.7358111 11.9994406,13.5047303 11.9999903,13.2592291 C12.0005723,13.0136956 12.096794,12.7831644 12.2708079,12.6100882 C12.9654406,11.9185917 13.3479995,10.996467 13.3479995,10.0134924 C13.3479995,9.03119677 12.966346,8.1086194 12.2733298,7.4157649 C11.9150203,7.05745543 11.9149233,6.47436998 12.2731358,6.11589885 C12.4467617,5.94224065 12.6775838,5.84666559 12.923085,5.84666559 C13.1685538,5.84666559 13.3993436,5.94220831 13.5730665,6.11570485 Z",
              id: "Fill-2",
            })
          )
        );
      },
      maximize() {
        return index.h(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            { id: "icons/minis/screenfull", "fill-rule": "evenodd" },
            index.h("path", {
              d: "M2.04162598,3 L2.04162598,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z M3,4 L16,4 L16,15 L3,15 L3,4 Z",
              id: "Rectangle-Copy",
              "fill-rule": "nonzero",
            })
          )
        );
      },
      minimize() {
        return index.h(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            { id: "icons/minis/screensmall", "fill-rule": "evenodd" },
            index.h("path", {
              d: "M11,16 L17.0147705,16 L17.0147705,3 L2.04162598,3 L2.04162598,10 L11,10 L11,16 Z M1,2 L18,2 L18,17 L1,17 L1,2 Z",
              id: "Rectangle",
              "fill-rule": "nonzero",
            })
          )
        );
      },
      "enter-vr"() {
        return index.h(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 17 10",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            { id: "Page-1", "fill-rule": "evenodd" },
            index.h(
              "g",
              { id: "VRon", "fill-rule": "nonzero" },
              index.h("path", {
                d: "M15.7856977,0.02395184 L15.8915734,0.02395184 C16.5037405,0.02395184 17,0.520211324 17,1.13237842 L17,1.54663675 L17,8.8915038 C17,9.5034193 16.4560011,10 15.7856977,10 L12.0095825,10 C9.98324439,7.1593807 8.80676009,5.741338 8.48012959,5.74587199 C8.16206045,5.75028714 7.01003321,7.1683298 5.02404785,10 L1.21426911,10 C0.543965735,10 3.32031236e-05,9.5034193 3.32031236e-05,8.8915038 L3.32031236e-05,1.54663675 L3.32031236e-05,1.13237842 L3.32031236e-05,1.13237842 C3.32031236e-05,0.520211324 0.496292687,0.02395184 1.10845978,0.02395184 L1.21426911,0.02395184 L15.7856977,0.02395184 Z M4.5,6 C5.32842712,6 6,5.32842712 6,4.5 C6,3.67157288 5.32842712,3 4.5,3 C3.67157288,3 3,3.67157288 3,4.5 C3,5.32842712 3.67157288,6 4.5,6 Z M12.5,6 C13.3284271,6 14,5.32842712 14,4.5 C14,3.67157288 13.3284271,3 12.5,3 C11.6715729,3 11,3.67157288 11,4.5 C11,5.32842712 11.6715729,6 12.5,6 Z",
                id: "Fill-1",
              })
            )
          )
        );
      },
      "exit-vr"() {
        return index.h(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            { id: "icons/minis/VRon-Copy", "fill-rule": "evenodd" },
            index.h(
              "g",
              { id: "Group-7-Copy", transform: "translate(1 3)" },
              index.h("path", {
                d: "M15.7856977,3.02395184 L17,3.02395184 L17,4.13237842 L17,4.54663675 L17,11.8915038 C17,12.5034193 16.4560011,13 15.7856977,13 L12.0095825,13 C9.98324439,10.1593807 8.80676009,8.741338 8.48012959,8.74587199 C8.16206045,8.75028714 7.01003321,10.1683298 5.02404785,13 L1.21426911,13 C0.543965735,13 3.32031236e-05,12.5034193 3.32031236e-05,11.8915038 L3.32031236e-05,4.54663675 L3.32031236e-05,4.13237842 L3.32031236e-05,3.02395184 L1.21426911,3.02395184 L15.7856977,3.02395184 Z M4.5,9 C5.32842712,9 6,8.32842712 6,7.5 C6,6.67157288 5.32842712,6 4.5,6 C3.67157288,6 3,6.67157288 3,7.5 C3,8.32842712 3.67157288,9 4.5,9 Z M12.5,9 C13.3284271,9 14,8.32842712 14,7.5 C14,6.67157288 13.3284271,6 12.5,6 C11.6715729,6 11,6.67157288 11,7.5 C11,8.32842712 11.6715729,9 12.5,9 Z M2.5486669,0 L14.420089,0 C14.7977406,0 15.1613805,0.149260956 15.4374308,0.417695511 L16.9999668,2.00634766 L0,2.00634766 L1.58537972,0.395493117 C1.84682061,0.141306827 2.19106994,0 2.5486669,0 Z",
                id: "Fill-1",
              })
            )
          )
        );
      },
      warning() {
        return index.h(
          "svg",
          {
            width: "21",
            height: "18",
            viewBox: "0 0 21 18",
            xmlns: "http://www.w3.org/2000/svg",
          },
          index.h(
            "g",
            {
              id: "02-Basic-Inputs",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            index.h(
              "g",
              {
                id: "Bits-&-Loaders-1312px-/-16-Copy-2",
                transform: "translate(-287.000000, -2242.000000)",
                fill: "#FFFFFF",
              },
              index.h("path", {
                d: "M307.648967,2256.27828 L299.66725,2243.21184 C299.202561,2242.45466 298.384621,2242 297.500172,2242 C296.615722,2242 295.797783,2242.45466 295.333093,2243.18986 L287.351377,2256.27836 C286.886687,2257.03555 286.886687,2257.96598 287.32892,2258.74506 C287.771145,2259.52423 288.589084,2260 289.517579,2260 L305.481676,2260 C306.388591,2260 307.20653,2259.52423 307.670336,2258.74506 C308.113423,2257.96589 308.113423,2257.03549 307.648742,2256.27836 L307.648967,2256.27828 Z M296.482789,2248.23069 C296.482789,2247.68984 296.947479,2247.23518 297.50026,2247.23518 C298.053041,2247.23518 298.517731,2247.68984 298.517731,2248.23069 L298.517731,2252.36319 C298.517731,2252.90404 298.053041,2253.3587 297.50026,2253.3587 C296.947479,2253.3587 296.482789,2252.90404 296.482789,2252.36319 L296.482789,2248.23069 Z M297.50026,2256.81913 C296.814458,2256.81913 296.261677,2256.27828 296.261677,2255.60728 C296.261677,2254.93629 296.814458,2254.39544 297.50026,2254.39544 C298.186062,2254.39544 298.738844,2254.93629 298.738844,2255.60728 C298.738844,2256.27828 298.186062,2256.81913 297.50026,2256.81913 Z",
                id: "Fill-1",
              })
            )
          )
        );
      },
      loading() {
        return index.h(
          "svg",
          {
            width: "20px",
            height: "20px",
            viewBox: "0 0 20 20",
            version: "1.1",
          },
          index.h(
            "g",
            {
              id: "02-Basic-Inputs",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd",
            },
            index.h(
              "g",
              {
                id: "Bits-&-Loaders-1312px-/-16-Copy-2",
                transform: "translate(-392.000000, -448.000000)",
              },
              index.h(
                "g",
                {
                  id: "AmpBasicSmall",
                  transform: "translate(392.000000, 448.000000)",
                },
                index.h("path", {
                  d: "M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 Z",
                  id: "spinner-circle",
                  fill: "#E1E1E1",
                }),
                index.h("path", {
                  d: "M10,0 L10,4 C6.6862915,4 4,6.6862915 4,10 C4,12.0133587 4.99166921,13.7951006 6.51321137,14.8834295 L4.18685298,18.1377379 C1.65198576,16.3237368 0,13.3547894 0,10 C0,4.4771525 4.4771525,0 10,0 Z",
                  id: "spinner-bar",
                  fill: "#FF9900",
                })
              )
            )
          )
        );
      },
      photoPlaceholder() {
        return index.h(
          "svg",
          {
            style: { padding: "64px 0px 64px", fill: "black" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "64",
            height: "64",
            viewBox: "0 0 24 24",
          },
          index.h("circle", { cx: "12", cy: "12", r: "3.2" }),
          index.h("path", {
            d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
          }),
          index.h("path", { d: "M0 0h24v24H0z", fill: "none" })
        );
      },
      microphone() {
        return index.h(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 352 512",
            height: "20px",
          },
          index.h("path", {
            d: "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z",
          })
        );
      },
      send() {
        return index.h(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            height: "20px",
          },
          index.h("path", {
            d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
          })
        );
      },
      ban() {
        return index.h(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
          index.h("path", {
            d: "M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z",
          })
        );
      },
    };

    exports.icons = icons;

    /***/
  },

  /***/ 36542: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    function _interopNamespace(e) {
      if (e && e.__esModule) {
        return e;
      } else {
        var n = {};
        if (e) {
          Object.keys(e).forEach(function (k) {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(
              n,
              k,
              d.get
                ? d
                : {
                    enumerable: true,
                    get: function () {
                      return e[k];
                    },
                  }
            );
          });
        }
        n["default"] = e;
        return n;
      }
    }

    const NAMESPACE = "amplify-ui-components";

    let scopeId;
    let contentRef;
    let hostTagName;
    let useNativeShadowDom = false;
    let checkSlotFallbackVisibility = false;
    let checkSlotRelocate = false;
    let isSvgMode = false;
    let queueCongestion = 0;
    let queuePending = false;
    const win = typeof window !== "undefined" ? window : {};
    const CSS = win.CSS;
    const doc = win.document || { head: {} };
    const plt = {
      $flags$: 0,
      $resourcesUrl$: "",
      jmp: (h) => h(),
      raf: (h) => requestAnimationFrame(h),
      ael: (el, eventName, listener, opts) =>
        el.addEventListener(eventName, listener, opts),
      rel: (el, eventName, listener, opts) =>
        el.removeEventListener(eventName, listener, opts),
    };
    const supportsShadow = /*@__PURE__*/ (() =>
      (doc.head.attachShadow + "").indexOf("[native") > -1)();
    const promiseResolve = (v) => Promise.resolve(v);
    const supportsConstructibleStylesheets = /*@__PURE__*/ (() => {
      try {
        new CSSStyleSheet();
        return true;
      } catch (e) {}
      return false;
    })();
    const addHostEventListeners = (
      elm,
      hostRef,
      listeners,
      attachParentListeners
    ) => {
      if (listeners) {
        listeners.map(([flags, name, method]) => {
          const target = elm;
          const handler = hostListenerProxy(hostRef, method);
          const opts = hostListenerOpts(flags);
          plt.ael(target, name, handler, opts);
          (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() =>
            plt.rel(target, name, handler, opts)
          );
        });
      }
    };
    const hostListenerProxy = (hostRef, methodName) => (ev) => {
      {
        if (hostRef.$flags$ & 256 /* isListenReady */) {
          // instance is ready, let's call it's member method for this event
          hostRef.$lazyInstance$[methodName](ev);
        } else {
          (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([
            methodName,
            ev,
          ]);
        }
      }
    };
    // prettier-ignore
    const hostListenerOpts = (flags) =>  (flags & 2 /* Capture */) !== 0;
    const HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
    const XLINK_NS = "http://www.w3.org/1999/xlink";
    const createTime = (fnName, tagName = "") => {
      {
        return () => {
          return;
        };
      }
    };
    const uniqueTime = (key, measureText) => {
      {
        return () => {
          return;
        };
      }
    };
    const rootAppliedStyles = new WeakMap();
    const registerStyle = (scopeId, cssText, allowCS) => {
      let style = styles.get(scopeId);
      if (supportsConstructibleStylesheets && allowCS) {
        style = style || new CSSStyleSheet();
        style.replace(cssText);
      } else {
        style = cssText;
      }
      styles.set(scopeId, style);
    };
    const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
      let scopeId = getScopeId(cmpMeta);
      let style = styles.get(scopeId);
      // if an element is NOT connected then getRootNode() will return the wrong root node
      // so the fallback is to always use the document for the root node in those cases
      styleContainerNode =
        styleContainerNode.nodeType === 11 /* DocumentFragment */
          ? styleContainerNode
          : doc;
      if (style) {
        if (typeof style === "string") {
          styleContainerNode = styleContainerNode.head || styleContainerNode;
          let appliedStyles = rootAppliedStyles.get(styleContainerNode);
          let styleElm;
          if (!appliedStyles) {
            rootAppliedStyles.set(
              styleContainerNode,
              (appliedStyles = new Set())
            );
          }
          if (!appliedStyles.has(scopeId)) {
            {
              if (plt.$cssShim$) {
                styleElm = plt.$cssShim$.createHostStyle(
                  hostElm,
                  scopeId,
                  style,
                  !!((cmpMeta.$flags$ & 10) /* needsScopedEncapsulation */)
                );
                const newScopeId = styleElm["s-sc"];
                if (newScopeId) {
                  scopeId = newScopeId;
                  // we don't want to add this styleID to the appliedStyles Set
                  // since the cssVarShim might need to apply several different
                  // stylesheets for the same component
                  appliedStyles = null;
                }
              } else {
                styleElm = doc.createElement("style");
                styleElm.innerHTML = style;
              }
              styleContainerNode.insertBefore(
                styleElm,
                styleContainerNode.querySelector("link")
              );
            }
            if (appliedStyles) {
              appliedStyles.add(scopeId);
            }
          }
        } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
          styleContainerNode.adoptedStyleSheets = [
            ...styleContainerNode.adoptedStyleSheets,
            style,
          ];
        }
      }
      return scopeId;
    };
    const attachStyles = (hostRef) => {
      const cmpMeta = hostRef.$cmpMeta$;
      const elm = hostRef.$hostElement$;
      const flags = cmpMeta.$flags$;
      const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
      const scopeId = addStyle(
        supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
        cmpMeta,
        hostRef.$modeName$,
        elm
      );
      if (flags & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm["s-sc"] = scopeId;
        elm.classList.add(scopeId + "-h");
        if (flags & 2 /* scopedCssEncapsulation */) {
          elm.classList.add(scopeId + "-s");
        }
      }
      endAttachStyles();
    };
    const getScopeId = (cmp, mode) => "sc-" + cmp.$tagName$;
    /**
     * Default style mode id
     */
    /**
     * Reusable empty obj/array
     * Don't add values to these!!
     */
    const EMPTY_OBJ = {};
    /**
     * Namespaces
     */
    const SVG_NS = "http://www.w3.org/2000/svg";
    const HTML_NS = "http://www.w3.org/1999/xhtml";
    const isDef = (v) => v != null;
    const isComplexType = (o) => {
      // https://jsperf.com/typeof-fn-object/5
      o = typeof o;
      return o === "object" || o === "function";
    };
    /**
     * Production h() function based on Preact by
     * Jason Miller (@developit)
     * Licensed under the MIT License
     * https://github.com/developit/preact/blob/master/LICENSE
     *
     * Modified for Stencil's compiler and vdom
     */
    // const stack: any[] = [];
    // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
    // export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
    const h = (nodeName, vnodeData, ...children) => {
      let child = null;
      let key = null;
      let slotName = null;
      let simple = false;
      let lastSimple = false;
      let vNodeChildren = [];
      const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
          child = c[i];
          if (Array.isArray(child)) {
            walk(child);
          } else if (child != null && typeof child !== "boolean") {
            if (
              (simple = typeof nodeName !== "function" && !isComplexType(child))
            ) {
              child = String(child);
            }
            if (simple && lastSimple) {
              // If the previous child was simple (string), we merge both
              vNodeChildren[vNodeChildren.length - 1].$text$ += child;
            } else {
              // Append a new vNode, if it's text, we create a text vNode
              vNodeChildren.push(simple ? newVNode(null, child) : child);
            }
            lastSimple = simple;
          }
        }
      };
      walk(children);
      if (vnodeData) {
        // normalize class / classname attributes
        if (vnodeData.key) {
          key = vnodeData.key;
        }
        if (vnodeData.name) {
          slotName = vnodeData.name;
        }
        {
          const classData = vnodeData.className || vnodeData.class;
          if (classData) {
            vnodeData.class =
              typeof classData !== "object"
                ? classData
                : Object.keys(classData)
                    .filter((k) => classData[k])
                    .join(" ");
          }
        }
      }
      const vnode = newVNode(nodeName, null);
      vnode.$attrs$ = vnodeData;
      if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
      }
      {
        vnode.$key$ = key;
      }
      {
        vnode.$name$ = slotName;
      }
      return vnode;
    };
    const newVNode = (tag, text) => {
      const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
      };
      {
        vnode.$attrs$ = null;
      }
      {
        vnode.$key$ = null;
      }
      {
        vnode.$name$ = null;
      }
      return vnode;
    };
    const Host = {};
    const isHost = (node) => node && node.$tag$ === Host;
    /**
     * Production setAccessor() function based on Preact by
     * Jason Miller (@developit)
     * Licensed under the MIT License
     * https://github.com/developit/preact/blob/master/LICENSE
     *
     * Modified for Stencil's compiler and vdom
     */
    const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
      if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === "class") {
          const classList = elm.classList;
          const oldClasses = parseClassList(oldValue);
          const newClasses = parseClassList(newValue);
          classList.remove(
            ...oldClasses.filter((c) => c && !newClasses.includes(c))
          );
          classList.add(
            ...newClasses.filter((c) => c && !oldClasses.includes(c))
          );
        } else if (memberName === "style") {
          // update style attribute, css properties and values
          {
            for (const prop in oldValue) {
              if (!newValue || newValue[prop] == null) {
                if (prop.includes("-")) {
                  elm.style.removeProperty(prop);
                } else {
                  elm.style[prop] = "";
                }
              }
            }
          }
          for (const prop in newValue) {
            if (!oldValue || newValue[prop] !== oldValue[prop]) {
              if (prop.includes("-")) {
                elm.style.setProperty(prop, newValue[prop]);
              } else {
                elm.style[prop] = newValue[prop];
              }
            }
          }
        } else if (memberName === "key");
        else if (memberName === "ref") {
          // minifier will clean this up
          if (newValue) {
            newValue(elm);
          }
        } else if (!isProp && memberName[0] === "o" && memberName[1] === "n") {
          // Event Handlers
          // so if the member name starts with "on" and the 3rd characters is
          // a capital letter, and it's not already a member on the element,
          // then we're assuming it's an event listener
          if (memberName[2] === "-") {
            // on- prefixed events
            // allows to be explicit about the dom event to listen without any magic
            // under the hood:
            // <my-cmp on-click> // listens for "click"
            // <my-cmp on-Click> // listens for "Click"
            // <my-cmp on-ionChange> // listens for "ionChange"
            // <my-cmp on-EVENTS> // listens for "EVENTS"
            memberName = memberName.slice(3);
          } else if (isMemberInElement(win, ln)) {
            // standard event
            // the JSX attribute could have been "onMouseOver" and the
            // member name "onmouseover" is on the window's prototype
            // so let's add the listener "mouseover", which is all lowercased
            memberName = ln.slice(2);
          } else {
            // custom event
            // the JSX attribute could have been "onMyCustomEvent"
            // so let's trim off the "on" prefix and lowercase the first character
            // and add the listener "myCustomEvent"
            // except for the first character, we keep the event name case
            memberName = ln[2] + memberName.slice(3);
          }
          if (oldValue) {
            plt.rel(elm, memberName, oldValue, false);
          }
          if (newValue) {
            plt.ael(elm, memberName, newValue, false);
          }
        } else {
          // Set property if it exists and it's not a SVG
          const isComplex = isComplexType(newValue);
          if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
            try {
              if (!elm.tagName.includes("-")) {
                let n = newValue == null ? "" : newValue;
                // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                if (memberName === "list") {
                  isProp = false;
                  // tslint:disable-next-line: triple-equals
                } else if (oldValue == null || elm[memberName] != n) {
                  elm[memberName] = n;
                }
              } else {
                elm[memberName] = newValue;
              }
            } catch (e) {}
          }
          /**
           * Need to manually update attribute if:
           * - memberName is not an attribute
           * - if we are rendering the host element in order to reflect attribute
           * - if it's a SVG, since properties might not work in <svg>
           * - if the newValue is null/undefined or 'false'.
           */
          let xlink = false;
          {
            if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
              memberName = ln;
              xlink = true;
            }
          }
          if (newValue == null || newValue === false) {
            if (newValue !== false || elm.getAttribute(memberName) === "") {
              if (xlink) {
                elm.removeAttributeNS(XLINK_NS, memberName);
              } else {
                elm.removeAttribute(memberName);
              }
            }
          } else if (
            (!isProp || flags & 4 /* isHost */ || isSvg) &&
            !isComplex
          ) {
            newValue = newValue === true ? "" : newValue;
            if (xlink) {
              elm.setAttributeNS(XLINK_NS, memberName, newValue);
            } else {
              elm.setAttribute(memberName, newValue);
            }
          }
        }
      }
    };
    const parseClassListRegex = /\s/;
    const parseClassList = (value) =>
      !value ? [] : value.split(parseClassListRegex);
    const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
      // if the element passed in is a shadow root, which is a document fragment
      // then we want to be adding attrs/props to the shadow root's "host" element
      // if it's not a shadow root, then we add attrs/props to the same element
      const elm =
        newVnode.$elm$.nodeType === 11 /* DocumentFragment */ &&
        newVnode.$elm$.host
          ? newVnode.$elm$.host
          : newVnode.$elm$;
      const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
      const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
      {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
          if (!(memberName in newVnodeAttrs)) {
            setAccessor(
              elm,
              memberName,
              oldVnodeAttrs[memberName],
              undefined,
              isSvgMode,
              newVnode.$flags$
            );
          }
        }
      }
      // add new & update changed attributes
      for (memberName in newVnodeAttrs) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          newVnodeAttrs[memberName],
          isSvgMode,
          newVnode.$flags$
        );
      }
    };
    const createElm = (
      oldParentVNode,
      newParentVNode,
      childIndex,
      parentElm
    ) => {
      // tslint:disable-next-line: prefer-const
      let newVNode = newParentVNode.$children$[childIndex];
      let i = 0;
      let elm;
      let childNode;
      let oldVNode;
      if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === "slot") {
          if (scopeId) {
            // scoped css needs to add its scoped id to the parent element
            parentElm.classList.add(scopeId + "-s");
          }
          newVNode.$flags$ |= newVNode.$children$
            ? // slot element has fallback content
              2 /* isSlotFallback */
            : // slot element does not have fallback content
              1 /* isSlotReference */;
        }
      }
      if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
      } else if (newVNode.$flags$ & 1 /* isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ = doc.createTextNode("");
      } else {
        if (!isSvgMode) {
          isSvgMode = newVNode.$tag$ === "svg";
        }
        // create element
        elm = newVNode.$elm$ = doc.createElementNS(
          isSvgMode ? SVG_NS : HTML_NS,
          newVNode.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode.$tag$
        );
        if (isSvgMode && newVNode.$tag$ === "foreignObject") {
          isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
          updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm["s-si"] !== scopeId) {
          // if there is a scopeId and this is the initial render
          // then let's add the scopeId as a css class
          elm.classList.add((elm["s-si"] = scopeId));
        }
        if (newVNode.$children$) {
          for (i = 0; i < newVNode.$children$.length; ++i) {
            // create the node
            childNode = createElm(oldParentVNode, newVNode, i, elm);
            // return node could have been null
            if (childNode) {
              // append our new node
              elm.appendChild(childNode);
            }
          }
        }
        {
          if (newVNode.$tag$ === "svg") {
            // Only reset the SVG context when we're exiting <svg> element
            isSvgMode = false;
          } else if (elm.tagName === "foreignObject") {
            // Reenter SVG context when we're exiting <foreignObject> element
            isSvgMode = true;
          }
        }
      }
      {
        elm["s-hn"] = hostTagName;
        if (
          newVNode.$flags$ &
          (2 /* isSlotFallback */ | 1) /* isSlotReference */
        ) {
          // remember the content reference comment
          elm["s-sr"] = true;
          // remember the content reference comment
          elm["s-cr"] = contentRef;
          // remember the slot name, or empty string for default slot
          elm["s-sn"] = newVNode.$name$ || "";
          // check if we've got an old vnode for this slot
          oldVNode =
            oldParentVNode &&
            oldParentVNode.$children$ &&
            oldParentVNode.$children$[childIndex];
          if (
            oldVNode &&
            oldVNode.$tag$ === newVNode.$tag$ &&
            oldParentVNode.$elm$
          ) {
            // we've got an old slot vnode and the wrapper is being replaced
            // so let's move the old slot content back to it's original location
            putBackInOriginalLocation(oldParentVNode.$elm$, false);
          }
        }
      }
      return elm;
    };
    const putBackInOriginalLocation = (parentElm, recursive) => {
      plt.$flags$ |= 1 /* isTmpDisconnected */;
      const oldSlotChildNodes = parentElm.childNodes;
      for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
          // // this child node in the old element is from another component
          // // remove this node from the old slot's parent
          // childNode.remove();
          // and relocate it back to it's original location
          parentReferenceNode(childNode).insertBefore(
            childNode,
            referenceNode(childNode)
          );
          // remove the old original location comment entirely
          // later on the patch function will know what to do
          // and move this to the correct spot in need be
          childNode["s-ol"].remove();
          childNode["s-ol"] = undefined;
          checkSlotRelocate = true;
        }
        if (recursive) {
          putBackInOriginalLocation(childNode, recursive);
        }
      }
      plt.$flags$ &= ~1 /* isTmpDisconnected */;
    };
    const addVnodes = (
      parentElm,
      before,
      parentVNode,
      vnodes,
      startIdx,
      endIdx
    ) => {
      let containerElm =
        (parentElm["s-cr"] && parentElm["s-cr"].parentNode) || parentElm;
      let childNode;
      if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
      }
      for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
          childNode = createElm(null, parentVNode, startIdx, parentElm);
          if (childNode) {
            vnodes[startIdx].$elm$ = childNode;
            containerElm.insertBefore(childNode, referenceNode(before));
          }
        }
      }
    };
    const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
      for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
          elm = vnode.$elm$;
          callNodeRefs(vnode);
          {
            // we're removing this element
            // so it's possible we need to show slot fallback content now
            checkSlotFallbackVisibility = true;
            if (elm["s-ol"]) {
              // remove the original location comment
              elm["s-ol"].remove();
            } else {
              // it's possible that child nodes of the node
              // that's being removed are slot nodes
              putBackInOriginalLocation(elm, true);
            }
          }
          // remove the vnode's element from the dom
          elm.remove();
        }
      }
    };
    const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
      let oldStartIdx = 0;
      let newStartIdx = 0;
      let idxInOld = 0;
      let i = 0;
      let oldEndIdx = oldCh.length - 1;
      let oldStartVnode = oldCh[0];
      let oldEndVnode = oldCh[oldEndIdx];
      let newEndIdx = newCh.length - 1;
      let newStartVnode = newCh[0];
      let newEndVnode = newCh[newEndIdx];
      let node;
      let elmToMove;
      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
          // Vnode might have been moved left
          oldStartVnode = oldCh[++oldStartIdx];
        } else if (oldEndVnode == null) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (newStartVnode == null) {
          newStartVnode = newCh[++newStartIdx];
        } else if (newEndVnode == null) {
          newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newStartVnode)) {
          patch(oldStartVnode, newStartVnode);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (isSameVnode(oldEndVnode, newEndVnode)) {
          patch(oldEndVnode, newEndVnode);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldStartVnode, newEndVnode)) {
          // Vnode moved right
          if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
            putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
          }
          patch(oldStartVnode, newEndVnode);
          parentElm.insertBefore(
            oldStartVnode.$elm$,
            oldEndVnode.$elm$.nextSibling
          );
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (isSameVnode(oldEndVnode, newStartVnode)) {
          // Vnode moved left
          if (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot") {
            putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
          }
          patch(oldEndVnode, newStartVnode);
          parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          // createKeyToOldIdx
          idxInOld = -1;
          {
            for (i = oldStartIdx; i <= oldEndIdx; ++i) {
              if (
                oldCh[i] &&
                oldCh[i].$key$ !== null &&
                oldCh[i].$key$ === newStartVnode.$key$
              ) {
                idxInOld = i;
                break;
              }
            }
          }
          if (idxInOld >= 0) {
            elmToMove = oldCh[idxInOld];
            if (elmToMove.$tag$ !== newStartVnode.$tag$) {
              node = createElm(
                oldCh && oldCh[newStartIdx],
                newVNode,
                idxInOld,
                parentElm
              );
            } else {
              patch(elmToMove, newStartVnode);
              oldCh[idxInOld] = undefined;
              node = elmToMove.$elm$;
            }
            newStartVnode = newCh[++newStartIdx];
          } else {
            // new element
            node = createElm(
              oldCh && oldCh[newStartIdx],
              newVNode,
              newStartIdx,
              parentElm
            );
            newStartVnode = newCh[++newStartIdx];
          }
          if (node) {
            {
              parentReferenceNode(oldStartVnode.$elm$).insertBefore(
                node,
                referenceNode(oldStartVnode.$elm$)
              );
            }
          }
        }
      }
      if (oldStartIdx > oldEndIdx) {
        addVnodes(
          parentElm,
          newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
          newVNode,
          newCh,
          newStartIdx,
          newEndIdx
        );
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
      }
    };
    const isSameVnode = (vnode1, vnode2) => {
      // compare if two vnode to see if they're "technically" the same
      // need to have the same element tag, and same key to be the same
      if (vnode1.$tag$ === vnode2.$tag$) {
        if (vnode1.$tag$ === "slot") {
          return vnode1.$name$ === vnode2.$name$;
        }
        {
          return vnode1.$key$ === vnode2.$key$;
        }
      }
      return false;
    };
    const referenceNode = (node) => {
      // this node was relocated to a new location in the dom
      // because of some other component's slot
      // but we still have an html comment in place of where
      // it's original location was according to it's original vdom
      return (node && node["s-ol"]) || node;
    };
    const parentReferenceNode = (node) =>
      (node["s-ol"] ? node["s-ol"] : node).parentNode;
    const patch = (oldVNode, newVNode) => {
      const elm = (newVNode.$elm$ = oldVNode.$elm$);
      const oldChildren = oldVNode.$children$;
      const newChildren = newVNode.$children$;
      const tag = newVNode.$tag$;
      const text = newVNode.$text$;
      let defaultHolder;
      if (text === null) {
        {
          // test if we're rendering an svg element, or still rendering nodes inside of one
          // only add this to the when the compiler sees we're using an svg somewhere
          isSvgMode =
            tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
        }
        // element node
        {
          if (tag === "slot");
          else {
            // either this is the first render of an element OR it's an update
            // AND we already know it's possible it could have changed
            // this updates the element's css classes, attrs, props, listeners, etc.
            updateElement(oldVNode, newVNode, isSvgMode);
          }
        }
        if (oldChildren !== null && newChildren !== null) {
          // looks like there's child vnodes for both the old and new vnodes
          updateChildren(elm, oldChildren, newVNode, newChildren);
        } else if (newChildren !== null) {
          // no old child vnodes, but there are new child vnodes to add
          if (oldVNode.$text$ !== null) {
            // the old vnode was text, so be sure to clear it out
            elm.textContent = "";
          }
          // add the new vnode children
          addVnodes(
            elm,
            null,
            newVNode,
            newChildren,
            0,
            newChildren.length - 1
          );
        } else if (oldChildren !== null) {
          // no new child vnodes, but there are old child vnodes to remove
          removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (isSvgMode && tag === "svg") {
          isSvgMode = false;
        }
      } else if ((defaultHolder = elm["s-cr"])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
      } else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
      }
    };
    const updateFallbackSlotVisibility = (elm) => {
      // tslint:disable-next-line: prefer-const
      let childNodes = elm.childNodes;
      let childNode;
      let i;
      let ilen;
      let j;
      let slotNameAttr;
      let nodeType;
      for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* ElementNode */) {
          if (childNode["s-sr"]) {
            // this is a slot fallback node
            // get the slot name for this slot reference node
            slotNameAttr = childNode["s-sn"];
            // by default always show a fallback slot node
            // then hide it if there are other slots in the light dom
            childNode.hidden = false;
            for (j = 0; j < ilen; j++) {
              if (childNodes[j]["s-hn"] !== childNode["s-hn"]) {
                // this sibling node is from a different component
                nodeType = childNodes[j].nodeType;
                if (slotNameAttr !== "") {
                  // this is a named fallback slot node
                  if (
                    nodeType === 1 /* ElementNode */ &&
                    slotNameAttr === childNodes[j].getAttribute("slot")
                  ) {
                    childNode.hidden = true;
                    break;
                  }
                } else {
                  // this is a default fallback slot node
                  // any element or text node (with content)
                  // should hide the default fallback slot node
                  if (
                    nodeType === 1 /* ElementNode */ ||
                    (nodeType === 3 /* TextNode */ &&
                      childNodes[j].textContent.trim() !== "")
                  ) {
                    childNode.hidden = true;
                    break;
                  }
                }
              }
            }
          }
          // keep drilling down
          updateFallbackSlotVisibility(childNode);
        }
      }
    };
    const relocateNodes = [];
    const relocateSlotContent = (elm) => {
      // tslint:disable-next-line: prefer-const
      let childNode;
      let node;
      let hostContentNodes;
      let slotNameAttr;
      let relocateNodeData;
      let j;
      let i = 0;
      let childNodes = elm.childNodes;
      let ilen = childNodes.length;
      for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode["s-sr"] && (node = childNode["s-cr"])) {
          // first got the content reference comment node
          // then we got it's parent, which is where all the host content is in now
          hostContentNodes = node.parentNode.childNodes;
          slotNameAttr = childNode["s-sn"];
          for (j = hostContentNodes.length - 1; j >= 0; j--) {
            node = hostContentNodes[j];
            if (
              !node["s-cn"] &&
              !node["s-nr"] &&
              node["s-hn"] !== childNode["s-hn"]
            ) {
              // let's do some relocating to its new home
              // but never relocate a content reference node
              // that is suppose to always represent the original content location
              if (isNodeLocatedInSlot(node, slotNameAttr)) {
                // it's possible we've already decided to relocate this node
                relocateNodeData = relocateNodes.find(
                  (r) => r.$nodeToRelocate$ === node
                );
                // made some changes to slots
                // let's make sure we also double check
                // fallbacks are correctly hidden or shown
                checkSlotFallbackVisibility = true;
                node["s-sn"] = node["s-sn"] || slotNameAttr;
                if (relocateNodeData) {
                  // previously we never found a slot home for this node
                  // but turns out we did, so let's remember it now
                  relocateNodeData.$slotRefNode$ = childNode;
                } else {
                  // add to our list of nodes to relocate
                  relocateNodes.push({
                    $slotRefNode$: childNode,
                    $nodeToRelocate$: node,
                  });
                }
                if (node["s-sr"]) {
                  relocateNodes.map((relocateNode) => {
                    if (
                      isNodeLocatedInSlot(
                        relocateNode.$nodeToRelocate$,
                        node["s-sn"]
                      )
                    ) {
                      relocateNodeData = relocateNodes.find(
                        (r) => r.$nodeToRelocate$ === node
                      );
                      if (relocateNodeData && !relocateNode.$slotRefNode$) {
                        relocateNode.$slotRefNode$ =
                          relocateNodeData.$slotRefNode$;
                      }
                    }
                  });
                }
              } else if (
                !relocateNodes.some((r) => r.$nodeToRelocate$ === node)
              ) {
                // so far this element does not have a slot home, not setting slotRefNode on purpose
                // if we never find a home for this element then we'll need to hide it
                relocateNodes.push({
                  $nodeToRelocate$: node,
                });
              }
            }
          }
        }
        if (childNode.nodeType === 1 /* ElementNode */) {
          relocateSlotContent(childNode);
        }
      }
    };
    const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
      if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
        if (
          nodeToRelocate.getAttribute("slot") === null &&
          slotNameAttr === ""
        ) {
          return true;
        }
        if (nodeToRelocate.getAttribute("slot") === slotNameAttr) {
          return true;
        }
        return false;
      }
      if (nodeToRelocate["s-sn"] === slotNameAttr) {
        return true;
      }
      return slotNameAttr === "";
    };
    const callNodeRefs = (vNode) => {
      {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
      }
    };
    const renderVdom = (hostRef, renderFnResults) => {
      const hostElm = hostRef.$hostElement$;
      const cmpMeta = hostRef.$cmpMeta$;
      const oldVNode = hostRef.$vnode$ || newVNode(null, null);
      const rootVnode = isHost(renderFnResults)
        ? renderFnResults
        : h(null, null, renderFnResults);
      hostTagName = hostElm.tagName;
      rootVnode.$tag$ = null;
      rootVnode.$flags$ |= 4 /* isHost */;
      hostRef.$vnode$ = rootVnode;
      rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm;
      {
        scopeId = hostElm["s-sc"];
      }
      {
        contentRef = hostElm["s-cr"];
        useNativeShadowDom =
          supportsShadow &&
          (cmpMeta.$flags$ & 1) /* shadowDomEncapsulation */ !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
      }
      // synchronous patch
      patch(oldVNode, rootVnode);
      {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* isTmpDisconnected */;
        if (checkSlotRelocate) {
          relocateSlotContent(rootVnode.$elm$);
          let relocateData;
          let nodeToRelocate;
          let orgLocationNode;
          let parentNodeRef;
          let insertBeforeNode;
          let refNode;
          let i = 0;
          for (; i < relocateNodes.length; i++) {
            relocateData = relocateNodes[i];
            nodeToRelocate = relocateData.$nodeToRelocate$;
            if (!nodeToRelocate["s-ol"]) {
              // add a reference node marking this node's original location
              // keep a reference to this node for later lookups
              orgLocationNode = doc.createTextNode("");
              orgLocationNode["s-nr"] = nodeToRelocate;
              nodeToRelocate.parentNode.insertBefore(
                (nodeToRelocate["s-ol"] = orgLocationNode),
                nodeToRelocate
              );
            }
          }
          for (i = 0; i < relocateNodes.length; i++) {
            relocateData = relocateNodes[i];
            nodeToRelocate = relocateData.$nodeToRelocate$;
            if (relocateData.$slotRefNode$) {
              // by default we're just going to insert it directly
              // after the slot reference node
              parentNodeRef = relocateData.$slotRefNode$.parentNode;
              insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
              orgLocationNode = nodeToRelocate["s-ol"];
              while ((orgLocationNode = orgLocationNode.previousSibling)) {
                refNode = orgLocationNode["s-nr"];
                if (
                  refNode &&
                  refNode["s-sn"] === nodeToRelocate["s-sn"] &&
                  parentNodeRef === refNode.parentNode
                ) {
                  refNode = refNode.nextSibling;
                  if (!refNode || !refNode["s-nr"]) {
                    insertBeforeNode = refNode;
                    break;
                  }
                }
              }
              if (
                (!insertBeforeNode &&
                  parentNodeRef !== nodeToRelocate.parentNode) ||
                nodeToRelocate.nextSibling !== insertBeforeNode
              ) {
                // we've checked that it's worth while to relocate
                // since that the node to relocate
                // has a different next sibling or parent relocated
                if (nodeToRelocate !== insertBeforeNode) {
                  if (!nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                    // probably a component in the index.html that doesn't have it's hostname set
                    nodeToRelocate["s-hn"] =
                      nodeToRelocate["s-ol"].parentNode.nodeName;
                  }
                  // add it back to the dom but in its new home
                  parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                }
              }
            } else {
              // this node doesn't have a slot home to go to, so let's hide it
              if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                nodeToRelocate.hidden = true;
              }
            }
          }
        }
        if (checkSlotFallbackVisibility) {
          updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
      }
    };
    const getElement = (ref) => getHostRef(ref).$hostElement$;
    const createEvent = (ref, name, flags) => {
      const elm = getElement(ref);
      return {
        emit: (detail) => {
          return emitEvent(elm, name, {
            bubbles: !!((flags & 4) /* Bubbles */),
            composed: !!((flags & 2) /* Composed */),
            cancelable: !!((flags & 1) /* Cancellable */),
            detail,
          });
        },
      };
    };
    const emitEvent = (elm, name, opts) => {
      const ev = new CustomEvent(name, opts);
      elm.dispatchEvent(ev);
      return ev;
    };
    const attachToAncestor = (hostRef, ancestorComponent) => {
      if (
        ancestorComponent &&
        !hostRef.$onRenderResolve$ &&
        ancestorComponent["s-p"]
      ) {
        ancestorComponent["s-p"].push(
          new Promise((r) => (hostRef.$onRenderResolve$ = r))
        );
      }
    };
    const scheduleUpdate = (hostRef, isInitialLoad) => {
      {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
      }
      if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
      }
      attachToAncestor(hostRef, hostRef.$ancestorComponent$);
      // there is no ancestorc omponent or the ancestor component
      // has already fired off its lifecycle update then
      // fire off the initial update
      const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
      return writeTask(dispatch);
    };
    const dispatchHooks = (hostRef, isInitialLoad) => {
      const endSchedule = createTime(
        "scheduleUpdate",
        hostRef.$cmpMeta$.$tagName$
      );
      const instance = hostRef.$lazyInstance$;
      let promise;
      if (isInitialLoad) {
        {
          hostRef.$flags$ |= 256 /* isListenReady */;
          if (hostRef.$queuedListeners$) {
            hostRef.$queuedListeners$.map(([methodName, event]) =>
              safeCall(instance, methodName, event)
            );
            hostRef.$queuedListeners$ = null;
          }
        }
        {
          promise = safeCall(instance, "componentWillLoad");
        }
      }
      endSchedule();
      return then(promise, () =>
        updateComponent(hostRef, instance, isInitialLoad)
      );
    };
    const updateComponent = (hostRef, instance, isInitialLoad) => {
      // updateComponent
      const elm = hostRef.$hostElement$;
      const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
      const rc = elm["s-rc"];
      if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
      }
      const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
      {
        {
          // looks like we've got child nodes to render into this host element
          // or we need to update the css class/attrs on the host element
          // DOM WRITE!
          renderVdom(hostRef, callRender(hostRef, instance));
        }
      }
      if (plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
      }
      if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm["s-rc"] = undefined;
      }
      endRender();
      endUpdate();
      {
        const childrenPromises = elm["s-p"];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
          postUpdate();
        } else {
          Promise.all(childrenPromises).then(postUpdate);
          hostRef.$flags$ |= 4 /* isWaitingForChildren */;
          childrenPromises.length = 0;
        }
      }
    };
    const callRender = (hostRef, instance) => {
      try {
        instance = instance.render();
        {
          hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        {
          hostRef.$flags$ |= 2 /* hasRendered */;
        }
      } catch (e) {
        consoleError(e);
      }
      return instance;
    };
    const postUpdateComponent = (hostRef) => {
      const tagName = hostRef.$cmpMeta$.$tagName$;
      const elm = hostRef.$hostElement$;
      const endPostUpdate = createTime("postUpdate", tagName);
      const instance = hostRef.$lazyInstance$;
      const ancestorComponent = hostRef.$ancestorComponent$;
      {
        safeCall(instance, "componentDidRender");
      }
      if (!((hostRef.$flags$ & 64) /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
          // DOM WRITE!
          addHydratedFlag(elm);
        }
        {
          safeCall(instance, "componentDidLoad");
        }
        endPostUpdate();
        {
          hostRef.$onReadyResolve$(elm);
          if (!ancestorComponent) {
            appDidLoad();
          }
        }
      } else {
        endPostUpdate();
      }
      // load events fire from bottom to top
      // the deepest elements load first then bubbles up
      {
        if (hostRef.$onRenderResolve$) {
          hostRef.$onRenderResolve$();
          hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
          nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(
          (4 /* isWaitingForChildren */ | 512) /* needsRerender */
        );
      }
      // ( •_•)
      // ( •_•)>⌐■-■
      // (⌐■_■)
    };
    const forceUpdate = (ref) => {
      {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (
          isConnected &&
          (hostRef.$flags$ &
            (2 /* hasRendered */ | 16)) /* isQueuedForUpdate */ ===
            2 /* hasRendered */
        ) {
          scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
      }
    };
    const appDidLoad = (who) => {
      // on appload
      // we have finish the first big initial render
      {
        addHydratedFlag(doc.documentElement);
      }
      {
        plt.$flags$ |= 2 /* appLoaded */;
      }
      nextTick(() =>
        emitEvent(win, "appload", { detail: { namespace: NAMESPACE } })
      );
    };
    const safeCall = (instance, method, arg) => {
      if (instance && instance[method]) {
        try {
          return instance[method](arg);
        } catch (e) {
          consoleError(e);
        }
      }
      return undefined;
    };
    const then = (promise, thenFn) => {
      return promise && promise.then ? promise.then(thenFn) : thenFn();
    };
    const addHydratedFlag = (elm) => elm.classList.add("hydrated");
    const parsePropertyValue = (propValue, propType) => {
      // ensure this value is of the correct prop type
      if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* Boolean */) {
          // per the HTML spec, any string value means it is a boolean true value
          // but we'll cheat here and say that the string "false" is the boolean false
          return propValue === "false"
            ? false
            : propValue === "" || !!propValue;
        }
        if (propType & 2 /* Number */) {
          // force it to be a number
          return parseFloat(propValue);
        }
        if (propType & 1 /* String */) {
          // could have been passed as a number or boolean
          // but we still want it as a string
          return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
      }
      // not sure exactly what type we want
      // so no need to change to a different type
      return propValue;
    };
    const getValue = (ref, propName) =>
      getHostRef(ref).$instanceValues$.get(propName);
    const setValue = (ref, propName, newVal, cmpMeta) => {
      // check our new property value against our internal value
      const hostRef = getHostRef(ref);
      const oldVal = hostRef.$instanceValues$.get(propName);
      const flags = hostRef.$flags$;
      const instance = hostRef.$lazyInstance$;
      newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
      if (
        (!((flags & 8) /* isConstructingInstance */) || oldVal === undefined) &&
        newVal !== oldVal
      ) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
          // get an array of method names of watch functions to call
          if (cmpMeta.$watchers$) {
            if (flags & 128 /* isWatchReady */) {
              const watchMethods = cmpMeta.$watchers$[propName];
              if (watchMethods) {
                // this instance is watching for when this property changed
                watchMethods.map((watchMethodName) => {
                  try {
                    // fire off each of the watch methods that are watching this property
                    instance[watchMethodName](newVal, oldVal, propName);
                  } catch (e) {
                    consoleError(e);
                  }
                });
              }
            }
          }
          if (
            (flags & (2 /* hasRendered */ | 16)) /* isQueuedForUpdate */ ===
            2 /* hasRendered */
          ) {
            // looks like this value actually changed, so we've got work to do!
            // but only if we've already rendered, otherwise just chill out
            // queue that we need to do an update, but don't worry about queuing
            // up millions cuz this function ensures it only runs once
            scheduleUpdate(hostRef, false);
          }
        }
      }
    };
    const proxyComponent = (Cstr, cmpMeta, flags) => {
      if (cmpMeta.$members$) {
        if (Cstr.watchers) {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
          if (
            memberFlags & 31 /* Prop */ ||
            (flags & 2 /* proxyState */ && memberFlags & 32) /* State */
          ) {
            // proxyComponent - prop
            Object.defineProperty(prototype, memberName, {
              get() {
                // proxyComponent, get value
                return getValue(this, memberName);
              },
              set(newValue) {
                // proxyComponent, set value
                setValue(this, memberName, newValue, cmpMeta);
              },
              configurable: true,
              enumerable: true,
            });
          }
        });
        if (flags & 1 /* isElementConstructor */) {
          const attrNameToPropName = new Map();
          prototype.attributeChangedCallback = function (
            attrName,
            _oldValue,
            newValue
          ) {
            plt.jmp(() => {
              const propName = attrNameToPropName.get(attrName);
              this[propName] =
                newValue === null && typeof this[propName] === "boolean"
                  ? false
                  : newValue;
            });
          };
          // create an array of attributes to observe
          // and also create a map of html attribute name to js property name
          Cstr.observedAttributes = members
            .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
            .map(([propName, m]) => {
              const attrName = m[1] || propName;
              attrNameToPropName.set(attrName, propName);
              return attrName;
            });
        }
      }
      return Cstr;
    };
    const initializeComponent = async (
      elm,
      hostRef,
      cmpMeta,
      hmrVersionId,
      Cstr
    ) => {
      // initializeComponent
      if ((hostRef.$flags$ & 32) /* hasInitializedComponent */ === 0) {
        // we haven't initialized this element yet
        hostRef.$flags$ |= 32 /* hasInitializedComponent */;
        {
          // lazy loaded components
          // request the component's implementation to be
          // wired up with the host element
          Cstr = loadModule(cmpMeta);
          if (Cstr.then) {
            // Await creates a micro-task avoid if possible
            const endLoad = uniqueTime();
            Cstr = await Cstr;
            endLoad();
          }
          if (!Cstr.isProxied) {
            // we'eve never proxied this Constructor before
            // let's add the getters/setters to its prototype before
            // the first time we create an instance of the implementation
            {
              cmpMeta.$watchers$ = Cstr.watchers;
            }
            proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
            Cstr.isProxied = true;
          }
          const endNewInstance = createTime(
            "createInstance",
            cmpMeta.$tagName$
          );
          // ok, time to construct the instance
          // but let's keep track of when we start and stop
          // so that the getters/setters don't incorrectly step on data
          {
            hostRef.$flags$ |= 8 /* isConstructingInstance */;
          }
          // construct the lazy-loaded component implementation
          // passing the hostRef is very important during
          // construction in order to directly wire together the
          // host element and the lazy-loaded instance
          try {
            new Cstr(hostRef);
          } catch (e) {
            consoleError(e);
          }
          {
            hostRef.$flags$ &= ~8 /* isConstructingInstance */;
          }
          {
            hostRef.$flags$ |= 128 /* isWatchReady */;
          }
          endNewInstance();
        }
        if (Cstr.style) {
          // this component has styles but we haven't registered them yet
          let style = Cstr.style;
          const scopeId = getScopeId(cmpMeta);
          if (!styles.has(scopeId)) {
            const endRegisterStyles = createTime(
              "registerStyles",
              cmpMeta.$tagName$
            );
            if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
              style = await Promise.resolve()
                .then(function () {
                  return __webpack_require__(96218);
                })
                .then((m) => m.scopeCss(style, scopeId, false));
            }
            registerStyle(
              scopeId,
              style,
              !!((cmpMeta.$flags$ & 1) /* shadowDomEncapsulation */)
            );
            endRegisterStyles();
          }
        }
      }
      // we've successfully created a lazy instance
      const ancestorComponent = hostRef.$ancestorComponent$;
      const schedule = () => scheduleUpdate(hostRef, true);
      if (ancestorComponent && ancestorComponent["s-rc"]) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent["s-rc"].push(schedule);
      } else {
        schedule();
      }
    };
    const connectedCallback = (elm) => {
      if ((plt.$flags$ & 1) /* isTmpDisconnected */ === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
        if (!((hostRef.$flags$ & 1) /* hasConnected */)) {
          // first time this component has connected
          hostRef.$flags$ |= 1 /* hasConnected */;
          {
            // initUpdate
            // if the slot polyfill is required we'll need to put some nodes
            // in here to act as original content anchors as we move nodes around
            // host element has been connected to the DOM
            if (
              cmpMeta.$flags$ &
              (4 /* hasSlotRelocation */ | 8) /* needsShadowDomShim */
            ) {
              setContentReference(elm);
            }
          }
          {
            // find the first ancestor component (if there is one) and register
            // this component as one of the actively loading child components for its ancestor
            let ancestorComponent = elm;
            while (
              (ancestorComponent =
                ancestorComponent.parentNode || ancestorComponent.host)
            ) {
              // climb up the ancestors looking for the first
              // component that hasn't finished its lifecycle update yet
              if (ancestorComponent["s-p"]) {
                // we found this components first ancestor component
                // keep a reference to this component's ancestor component
                attachToAncestor(
                  hostRef,
                  (hostRef.$ancestorComponent$ = ancestorComponent)
                );
                break;
              }
            }
          }
          // Lazy properties
          // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
          if (cmpMeta.$members$) {
            Object.entries(cmpMeta.$members$).map(
              ([memberName, [memberFlags]]) => {
                if (
                  memberFlags & 31 /* Prop */ &&
                  elm.hasOwnProperty(memberName)
                ) {
                  const value = elm[memberName];
                  delete elm[memberName];
                  elm[memberName] = value;
                }
              }
            );
          }
          {
            initializeComponent(elm, hostRef, cmpMeta);
          }
        } else {
          // not the first time this has connected
          // reattach any event listeners to the host
          // since they would have been removed when disconnected
          addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
        }
        endConnected();
      }
    };
    const setContentReference = (elm) => {
      // only required when we're NOT using native shadow dom (slot)
      // or this browser doesn't support native shadow dom
      // and this host element was NOT created with SSR
      // let's pick out the inner content for slot projection
      // create a node to represent where the original
      // content was first placed, which is useful later on
      const contentRefElm = (elm["s-cr"] = doc.createComment(""));
      contentRefElm["s-cn"] = true;
      elm.insertBefore(contentRefElm, elm.firstChild);
    };
    const disconnectedCallback = (elm) => {
      if ((plt.$flags$ & 1) /* isTmpDisconnected */ === 0) {
        const hostRef = getHostRef(elm);
        const instance = hostRef.$lazyInstance$;
        {
          if (hostRef.$rmListeners$) {
            hostRef.$rmListeners$.map((rmListener) => rmListener());
            hostRef.$rmListeners$ = undefined;
          }
        }
        // clear CSS var-shim tracking
        if (plt.$cssShim$) {
          plt.$cssShim$.removeHost(elm);
        }
        {
          safeCall(instance, "disconnectedCallback");
        }
      }
    };
    const bootstrapLazy = (lazyBundles, options = {}) => {
      const endBootstrap = createTime();
      const cmpTags = [];
      const exclude = options.exclude || [];
      const customElements = win.customElements;
      const head = doc.head;
      const metaCharset = /*@__PURE__*/ head.querySelector("meta[charset]");
      const visibilityStyle = /*@__PURE__*/ doc.createElement("style");
      const deferredConnectedCallbacks = [];
      let appLoadFallback;
      let isBootstrapping = true;
      Object.assign(plt, options);
      plt.$resourcesUrl$ = new URL(
        options.resourcesUrl || "./",
        doc.baseURI
      ).href;
      {
        if (options.syncQueue) {
          plt.$flags$ |= 4 /* queueSync */;
        }
      }
      lazyBundles.map((lazyBundle) =>
        lazyBundle[1].map((compactMeta) => {
          const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
          };
          {
            cmpMeta.$members$ = compactMeta[2];
          }
          {
            cmpMeta.$listeners$ = compactMeta[3];
          }
          {
            cmpMeta.$watchers$ = {};
          }
          if (
            !supportsShadow &&
            cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */
          ) {
            cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
          }
          const tagName = cmpMeta.$tagName$;
          const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
              // @ts-ignore
              super(self);
              self = this;
              registerHost(self, cmpMeta);
              if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
                // this component is using shadow dom
                // and this browser supports shadow dom
                // add the read-only property "shadowRoot" to the host element
                // adding the shadow root build conditionals to minimize runtime
                if (supportsShadow) {
                  {
                    self.attachShadow({ mode: "open" });
                  }
                } else if (!("shadowRoot" in self)) {
                  self.shadowRoot = self;
                }
              }
            }
            connectedCallback() {
              if (appLoadFallback) {
                clearTimeout(appLoadFallback);
                appLoadFallback = null;
              }
              if (isBootstrapping) {
                // connectedCallback will be processed once all components have been registered
                deferredConnectedCallbacks.push(this);
              } else {
                plt.jmp(() => connectedCallback(this));
              }
            }
            disconnectedCallback() {
              plt.jmp(() => disconnectedCallback(this));
            }
            forceUpdate() {
              forceUpdate(this);
            }
            componentOnReady() {
              return getHostRef(this).$onReadyPromise$;
            }
          };
          cmpMeta.$lazyBundleId$ = lazyBundle[0];
          if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(
              tagName,
              proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
            );
          }
        })
      );
      {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute("data-styles", "");
        head.insertBefore(
          visibilityStyle,
          metaCharset ? metaCharset.nextSibling : head.firstChild
        );
      }
      // Process deferred connectedCallbacks now all components have been registered
      isBootstrapping = false;
      if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
      } else {
        {
          plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
      }
      // Fallback appLoad event
      endBootstrap();
    };
    const hostRefs = new WeakMap();
    const getHostRef = (ref) => hostRefs.get(ref);
    const registerInstance = (lazyInstance, hostRef) =>
      hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
    const registerHost = (elm, cmpMeta) => {
      const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
      };
      {
        hostRef.$onReadyPromise$ = new Promise(
          (r) => (hostRef.$onReadyResolve$ = r)
        );
        elm["s-p"] = [];
        elm["s-rc"] = [];
      }
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      return hostRefs.set(elm, hostRef);
    };
    const isMemberInElement = (elm, memberName) => memberName in elm;
    const consoleError = (e) => console.error(e);
    const cmpModules = /*@__PURE__*/ new Map();
    const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
      // loadModuleImport
      const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
      const bundleId = cmpMeta.$lazyBundleId$;
      const module = cmpModules.get(bundleId);
      if (module) {
        return module[exportName];
      }
      return Promise.resolve()
        .then(function () {
          return _interopNamespace(
            __webpack_require__(25873)(`./${bundleId}.entry.js`)
          );
        })
        .then((importedModule) => {
          {
            cmpModules.set(bundleId, importedModule);
          }
          return importedModule[exportName];
        }, consoleError);
    };
    const styles = new Map();
    const queueDomReads = [];
    const queueDomWrites = [];
    const queueDomWritesLow = [];
    const queueTask = (queue, write) => (cb) => {
      queue.push(cb);
      if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
          nextTick(flush);
        } else {
          plt.raf(flush);
        }
      }
    };
    const consume = (queue) => {
      for (let i = 0; i < queue.length; i++) {
        try {
          queue[i](performance.now());
        } catch (e) {
          consoleError(e);
        }
      }
      queue.length = 0;
    };
    const consumeTimeout = (queue, timeout) => {
      let i = 0;
      let ts = 0;
      while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
          queue[i++](ts);
        } catch (e) {
          consoleError(e);
        }
      }
      if (i === queue.length) {
        queue.length = 0;
      } else if (i !== 0) {
        queue.splice(0, i);
      }
    };
    const flush = () => {
      {
        queueCongestion++;
      }
      // always force a bunch of medium callbacks to run, but still have
      // a throttle on how many can run in a certain time
      // DOM READS!!!
      consume(queueDomReads);
      // DOM WRITES!!!
      {
        const timeout =
          (plt.$flags$ & 6) /* queueMask */ === 2 /* appLoaded */
            ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0))
            : Infinity;
        consumeTimeout(queueDomWrites, timeout);
        consumeTimeout(queueDomWritesLow, timeout);
        if (queueDomWrites.length > 0) {
          queueDomWritesLow.push(...queueDomWrites);
          queueDomWrites.length = 0;
        }
        if (
          (queuePending =
            queueDomReads.length +
              queueDomWrites.length +
              queueDomWritesLow.length >
            0)
        ) {
          // still more to do yet, but we've run out of time
          // let's let this thing cool off and try again in the next tick
          plt.raf(flush);
        } else {
          queueCongestion = 0;
        }
      }
    };
    const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
    const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

    exports.CSS = CSS;
    exports.Host = Host;
    exports.NAMESPACE = NAMESPACE;
    exports.bootstrapLazy = bootstrapLazy;
    exports.createEvent = createEvent;
    exports.doc = doc;
    exports.getElement = getElement;
    exports.h = h;
    exports.plt = plt;
    exports.promiseResolve = promiseResolve;
    exports.registerInstance = registerInstance;
    exports.win = win;

    /***/
  },

  /***/ 85779: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    __webpack_require__(4966);
    const authTypes = __webpack_require__(13564);
    const storageTypes = __webpack_require__(18332);
    __webpack_require__(67375);
    const Translations = __webpack_require__(45740);
    const constants = __webpack_require__(18524);
    const helpers = __webpack_require__(30924);

    Object.defineProperty(exports, "AuthFormField", {
      enumerable: true,
      get: function () {
        return authTypes.AuthFormField;
      },
    });
    Object.defineProperty(exports, "AuthState", {
      enumerable: true,
      get: function () {
        return authTypes.AuthState;
      },
    });
    Object.defineProperty(exports, "ChallengeName", {
      enumerable: true,
      get: function () {
        return authTypes.ChallengeName;
      },
    });
    Object.defineProperty(exports, "MfaOption", {
      enumerable: true,
      get: function () {
        return authTypes.MfaOption;
      },
    });
    Object.defineProperty(exports, "UsernameAlias", {
      enumerable: true,
      get: function () {
        return authTypes.UsernameAlias;
      },
    });
    Object.defineProperty(exports, "AccessLevel", {
      enumerable: true,
      get: function () {
        return storageTypes.AccessLevel;
      },
    });
    exports.Translations = Translations.Translations;
    exports.AUTH_CHANNEL = constants.AUTH_CHANNEL;
    exports.AUTH_STATE_CHANGE_EVENT = constants.AUTH_STATE_CHANGE_EVENT;
    exports.TOAST_AUTH_ERROR_EVENT = constants.TOAST_AUTH_ERROR_EVENT;
    exports.UI_AUTH_CHANNEL = constants.UI_AUTH_CHANNEL;
    exports.onAuthUIStateChange = helpers.onAuthUIStateChange;

    /***/
  },

  /***/ 60698: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });

    const index = __webpack_require__(36542);
    const theme = __webpack_require__(78362);
    __webpack_require__(4966);

    const defineCustomElements = (win, options) => {
      if (typeof window === "undefined") return Promise.resolve();
      return theme.patchEsm().then(() => {
        return index.bootstrapLazy(
          [
            ["amplify-icon.cjs", [[2, "amplify-icon", { name: [1] }]]],
            [
              "amplify-authenticator.cjs",
              [
                [
                  1,
                  "amplify-authenticator",
                  {
                    initialAuthState: [1, "initial-auth-state"],
                    federated: [16],
                    usernameAlias: [1, "username-alias"],
                    handleAuthStateChange: [16],
                    hideToast: [4, "hide-toast"],
                    authState: [32],
                    authData: [32],
                    toastMessage: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-federated-sign-in.cjs",
              [
                [
                  1,
                  "amplify-federated-sign-in",
                  { authState: [1, "auth-state"], federated: [8] },
                ],
              ],
            ],
            [
              "amplify-select-mfa-type.cjs",
              [
                [
                  1,
                  "amplify-select-mfa-type",
                  {
                    MFATypes: [16],
                    authData: [16],
                    handleSubmit: [16],
                    TOTPSetup: [32],
                    selectMessage: [32],
                    MFAMethod: [32],
                    isTOTP: [32],
                    isNoMFA: [32],
                    isSMS: [32],
                    loading: [32],
                    isToastVisible: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-s3-image-picker.cjs",
              [
                [
                  4,
                  "amplify-s3-image-picker",
                  {
                    path: [1],
                    contentType: [1, "content-type"],
                    level: [1],
                    track: [4],
                    identityId: [1, "identity-id"],
                    fileToKey: [16],
                    headerTitle: [1, "header-title"],
                    headerHint: [1, "header-hint"],
                    placeholderHint: [1, "placeholder-hint"],
                    buttonText: [1, "button-text"],
                    src: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-chatbot.cjs",
              [
                [
                  1,
                  "amplify-chatbot",
                  {
                    botName: [1, "bot-name"],
                    clearOnComplete: [4, "clear-on-complete"],
                    conversationModeOn: [4, "conversation-mode-on"],
                    welcomeMessage: [1, "welcome-message"],
                    botTitle: [1, "bot-title"],
                    voiceEnabled: [4, "voice-enabled"],
                    textEnabled: [4, "text-enabled"],
                    silenceTime: [2, "silence-time"],
                    silenceThreshold: [2, "silence-threshold"],
                    messages: [32],
                    text: [32],
                    chatState: [32],
                    error: [32],
                  },
                  [[0, "formSubmit", "submitHandler"]],
                ],
              ],
            ],
            [
              "amplify-greetings.cjs",
              [
                [
                  1,
                  "amplify-greetings",
                  { username: [1], logo: [16], handleAuthStateChange: [16] },
                ],
              ],
            ],
            [
              "amplify-s3-album.cjs",
              [
                [
                  1,
                  "amplify-s3-album",
                  {
                    path: [1],
                    contentType: [1, "content-type"],
                    level: [1],
                    track: [4],
                    identityId: [1, "identity-id"],
                    fileToKey: [16],
                    filter: [16],
                    sort: [16],
                    picker: [4],
                    handleOnLoad: [16],
                    handleOnError: [16],
                    pickerText: [1, "picker-text"],
                    albumItems: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-s3-text-picker.cjs",
              [
                [
                  1,
                  "amplify-s3-text-picker",
                  {
                    path: [1],
                    contentType: [1, "content-type"],
                    level: [1],
                    track: [4],
                    identityId: [1, "identity-id"],
                    fileToKey: [16],
                    fallbackText: [1, "fallback-text"],
                    src: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-icon-button.cjs",
              [
                [
                  1,
                  "amplify-icon-button",
                  {
                    name: [1],
                    tooltip: [1],
                    autoShowTooltip: [4, "auto-show-tooltip"],
                  },
                ],
              ],
            ],
            [
              "amplify-checkbox.cjs",
              [
                [
                  1,
                  "amplify-checkbox",
                  {
                    name: [1],
                    value: [1],
                    fieldId: [1, "field-id"],
                    label: [1],
                    checked: [4],
                    disabled: [4],
                  },
                ],
              ],
            ],
            ["amplify-auth-container.cjs", [[4, "amplify-auth-container"]]],
            ["amplify-container.cjs", [[4, "amplify-container"]]],
            ["amplify-link.cjs", [[1, "amplify-link", { role: [1] }]]],
            [
              "amplify-photo-picker.cjs",
              [
                [
                  1,
                  "amplify-photo-picker",
                  {
                    headerTitle: [1, "header-title"],
                    headerHint: [1, "header-hint"],
                    placeholderHint: [1, "placeholder-hint"],
                    buttonText: [1, "button-text"],
                    previewSrc: [1, "preview-src"],
                    handleClick: [16],
                    previewState: [32],
                    file: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-s3-image.cjs",
              [
                [
                  1,
                  "amplify-s3-image",
                  {
                    imgKey: [1, "img-key"],
                    path: [1],
                    alt: [1],
                    body: [16],
                    contentType: [1, "content-type"],
                    level: [1],
                    track: [4],
                    identityId: [1, "identity-id"],
                    handleOnLoad: [16],
                    handleOnError: [16],
                    imgProps: [16],
                    src: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-s3-text.cjs",
              [
                [
                  1,
                  "amplify-s3-text",
                  {
                    textKey: [1, "text-key"],
                    path: [1],
                    body: [16],
                    contentType: [1, "content-type"],
                    level: [1],
                    track: [4],
                    identityId: [1, "identity-id"],
                    fallbackText: [1, "fallback-text"],
                    src: [32],
                  },
                ],
              ],
            ],
            [
              "amplify-tooltip.cjs",
              [
                [
                  1,
                  "amplify-tooltip",
                  { text: [1], shouldAutoShow: [4, "should-auto-show"] },
                ],
              ],
            ],
            [
              "amplify-nav_2.cjs",
              [
                [
                  1,
                  "amplify-sign-out",
                  {
                    handleAuthStateChange: [16],
                    buttonText: [1, "button-text"],
                  },
                ],
                [1, "amplify-nav"],
              ],
            ],
            [
              "amplify-picker.cjs",
              [
                [
                  1,
                  "amplify-picker",
                  {
                    pickerText: [1, "picker-text"],
                    acceptValue: [1, "accept-value"],
                    inputHandler: [16],
                  },
                ],
              ],
            ],
            [
              "amplify-federated-buttons_2.cjs",
              [
                [6, "amplify-strike"],
                [
                  1,
                  "amplify-federated-buttons",
                  {
                    authState: [1, "auth-state"],
                    federated: [16],
                    handleAuthStateChange: [16],
                  },
                ],
              ],
            ],
            [
              "amplify-form-field_4.cjs",
              [
                [
                  4,
                  "amplify-form-field",
                  {
                    fieldId: [1, "field-id"],
                    label: [1],
                    description: [1],
                    hint: [1],
                    type: [1],
                    required: [4],
                    handleInputChange: [16],
                    placeholder: [1],
                    name: [1],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                  },
                ],
                [1, "amplify-hint"],
                [
                  0,
                  "amplify-input",
                  {
                    fieldId: [1, "field-id"],
                    description: [1],
                    type: [1],
                    handleInputChange: [16],
                    placeholder: [1],
                    name: [1],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                    required: [4],
                    autoCompleted: [32],
                  },
                ],
                [4, "amplify-label", { htmlFor: [1, "html-for"] }],
              ],
            ],
            [
              "amplify-auth-fields_9.cjs",
              [
                [0, "amplify-auth-fields", { formFields: [16] }],
                [
                  0,
                  "amplify-phone-field",
                  {
                    fieldId: [1, "field-id"],
                    label: [1],
                    placeholder: [1],
                    hint: [1],
                    required: [4],
                    handleInputChange: [16],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                    dialCode: [8, "dial-code"],
                  },
                ],
                [
                  0,
                  "amplify-code-field",
                  {
                    fieldId: [1, "field-id"],
                    label: [1],
                    placeholder: [1],
                    hint: [1],
                    required: [4],
                    handleInputChange: [16],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                  },
                ],
                [
                  0,
                  "amplify-email-field",
                  {
                    fieldId: [1, "field-id"],
                    label: [1],
                    placeholder: [1],
                    required: [4],
                    handleInputChange: [16],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                    hint: [1],
                  },
                ],
                [
                  0,
                  "amplify-password-field",
                  {
                    fieldId: [1, "field-id"],
                    label: [1],
                    placeholder: [1],
                    hint: [1],
                    required: [4],
                    handleInputChange: [16],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                  },
                ],
                [
                  0,
                  "amplify-username-field",
                  {
                    fieldId: [1, "field-id"],
                    label: [1],
                    placeholder: [1],
                    required: [4],
                    handleInputChange: [16],
                    value: [1],
                    inputProps: [16],
                    disabled: [4],
                    hint: [1],
                  },
                ],
                [
                  1,
                  "amplify-country-dial-code",
                  {
                    fieldId: [1, "field-id"],
                    options: [16],
                    handleInputChange: [16],
                    dialCode: [8, "dial-code"],
                  },
                ],
                [
                  1,
                  "amplify-select",
                  {
                    options: [16],
                    fieldId: [1, "field-id"],
                    handleInputChange: [16],
                    selected: [8],
                  },
                ],
                [
                  4,
                  "amplify-form-section",
                  {
                    handleSubmit: [16],
                    submitButtonText: [1, "submit-button-text"],
                    headerText: [1, "header-text"],
                    testDataPrefix: [1, "test-data-prefix"],
                    loading: [4],
                    secondaryFooterContent: [1, "secondary-footer-content"],
                  },
                  [[0, "formSubmit", "handleFormSubmit"]],
                ],
              ],
            ],
            [
              "amplify-radio-button_3.cjs",
              [
                [
                  1,
                  "amplify-totp-setup",
                  {
                    user: [16],
                    handleAuthStateChange: [16],
                    headerText: [1, "header-text"],
                    issuer: [1],
                    handleComplete: [16],
                    standalone: [4],
                    code: [32],
                    setupMessage: [32],
                    qrCodeImageSource: [32],
                    qrCodeInput: [32],
                    loading: [32],
                  },
                ],
                [
                  0,
                  "amplify-radio-button",
                  {
                    handleInputChange: [16],
                    name: [1],
                    value: [1],
                    placeholder: [1],
                    fieldId: [1, "field-id"],
                    label: [1],
                    checked: [4],
                    disabled: [4],
                    inputProps: [16],
                  },
                ],
                [1, "amplify-toast", { handleClose: [16], message: [1] }],
              ],
            ],
            [
              "amplify-sign-in-button.cjs",
              [[6, "amplify-sign-in-button", { provider: [1] }]],
            ],
            [
              "amplify-amazon-button_5.cjs",
              [
                [
                  1,
                  "amplify-amazon-button",
                  { clientId: [1, "client-id"], handleAuthStateChange: [16] },
                ],
                [
                  1,
                  "amplify-auth0-button",
                  { config: [16], handleAuthStateChange: [16] },
                ],
                [
                  1,
                  "amplify-facebook-button",
                  { appId: [1, "app-id"], handleAuthStateChange: [16] },
                ],
                [
                  1,
                  "amplify-google-button",
                  { handleAuthStateChange: [16], clientId: [1, "client-id"] },
                ],
                [1, "amplify-oauth-button", { config: [16] }],
              ],
            ],
            [
              "amplify-button_3.cjs",
              [
                [1, "amplify-loading-spinner"],
                [4, "amplify-section", { role: [1] }],
                [
                  4,
                  "amplify-button",
                  {
                    type: [1],
                    variant: [1],
                    handleButtonClick: [16],
                    disabled: [4],
                    icon: [1],
                  },
                ],
              ],
            ],
            [
              "amplify-confirm-sign-in_7.cjs",
              [
                [
                  1,
                  "amplify-sign-in",
                  {
                    handleSubmit: [16],
                    headerText: [1, "header-text"],
                    submitButtonText: [1, "submit-button-text"],
                    federated: [16],
                    handleAuthStateChange: [16],
                    usernameAlias: [1, "username-alias"],
                    formFields: [16],
                    hideSignUp: [4, "hide-sign-up"],
                    loading: [32],
                    signInAttributes: [32],
                  },
                ],
                [
                  1,
                  "amplify-confirm-sign-in",
                  {
                    handleSubmit: [16],
                    headerText: [1, "header-text"],
                    submitButtonText: [1, "submit-button-text"],
                    handleAuthStateChange: [16],
                    formFields: [16],
                    user: [16],
                    mfaOption: [32],
                    loading: [32],
                    code: [32],
                  },
                ],
                [
                  1,
                  "amplify-confirm-sign-up",
                  {
                    handleSubmit: [16],
                    headerText: [1, "header-text"],
                    submitButtonText: [1, "submit-button-text"],
                    formFields: [16],
                    handleAuthStateChange: [16],
                    user: [16],
                    usernameAlias: [1, "username-alias"],
                    code: [32],
                    loading: [32],
                    userInput: [32],
                  },
                ],
                [
                  1,
                  "amplify-forgot-password",
                  {
                    headerText: [1, "header-text"],
                    sendButtonText: [1, "send-button-text"],
                    submitButtonText: [1, "submit-button-text"],
                    formFields: [16],
                    handleSend: [16],
                    handleSubmit: [16],
                    handleAuthStateChange: [16],
                    usernameAlias: [1, "username-alias"],
                    delivery: [32],
                    loading: [32],
                    forgotPasswordAttrs: [32],
                  },
                ],
                [
                  1,
                  "amplify-require-new-password",
                  {
                    headerText: [1, "header-text"],
                    submitButtonText: [1, "submit-button-text"],
                    handleSubmit: [16],
                    handleAuthStateChange: [16],
                    user: [16],
                    formFields: [16],
                    password: [32],
                    loading: [32],
                  },
                ],
                [
                  1,
                  "amplify-sign-up",
                  {
                    handleSubmit: [16],
                    handleSignUp: [16],
                    validationErrors: [1, "validation-errors"],
                    headerText: [1, "header-text"],
                    submitButtonText: [1, "submit-button-text"],
                    haveAccountText: [1, "have-account-text"],
                    signInText: [1, "sign-in-text"],
                    formFields: [16],
                    handleAuthStateChange: [16],
                    usernameAlias: [1, "username-alias"],
                    loading: [32],
                    signUpAttributes: [32],
                  },
                ],
                [
                  1,
                  "amplify-verify-contact",
                  {
                    handleAuthStateChange: [16],
                    user: [16],
                    verifyAttr: [32],
                    loading: [32],
                    code: [32],
                    contact: [32],
                  },
                ],
              ],
            ],
          ],
          options
        );
      });
    };

    exports.defineCustomElements = defineCustomElements;

    /***/
  },

  /***/ 96218: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    /*
 Stencil Client Platform v1.15.0 | MIT Licensed | https://stenciljs.com
 */
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     *
     * This file is a port of shadowCSS from webcomponents.js to TypeScript.
     * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
     * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
     */
    const safeSelector = (selector) => {
      const placeholders = [];
      let index = 0;
      let content;
      // Replaces attribute selectors with placeholders.
      // The WS in [attr="va lue"] would otherwise be interpreted as a selector separator.
      selector = selector.replace(/(\[[^\]]*\])/g, (_, keep) => {
        const replaceBy = `__ph-${index}__`;
        placeholders.push(keep);
        index++;
        return replaceBy;
      });
      // Replaces the expression in `:nth-child(2n + 1)` with a placeholder.
      // WS and "+" would otherwise be interpreted as selector separators.
      content = selector.replace(
        /(:nth-[-\w]+)(\([^)]+\))/g,
        (_, pseudo, exp) => {
          const replaceBy = `__ph-${index}__`;
          placeholders.push(exp);
          index++;
          return pseudo + replaceBy;
        }
      );
      const ss = {
        content,
        placeholders,
      };
      return ss;
    };
    const restoreSafeSelector = (placeholders, content) => {
      return content.replace(
        /__ph-(\d+)__/g,
        (_, index) => placeholders[+index]
      );
    };
    const _polyfillHost = "-shadowcsshost";
    const _polyfillSlotted = "-shadowcssslotted";
    // note: :host-context pre-processed to -shadowcsshostcontext.
    const _polyfillHostContext = "-shadowcsscontext";
    const _parenSuffix =
      ")(?:\\((" + "(?:\\([^)(]*\\)|[^)(]*)+?" + ")\\))?([^,{]*)";
    const _cssColonHostRe = new RegExp(
      "(" + _polyfillHost + _parenSuffix,
      "gim"
    );
    const _cssColonHostContextRe = new RegExp(
      "(" + _polyfillHostContext + _parenSuffix,
      "gim"
    );
    const _cssColonSlottedRe = new RegExp(
      "(" + _polyfillSlotted + _parenSuffix,
      "gim"
    );
    const _polyfillHostNoCombinator = _polyfillHost + "-no-combinator";
    const _polyfillHostNoCombinatorRe = /-shadowcsshost-no-combinator([^\s]*)/;
    const _shadowDOMSelectorsRe = [/::shadow/g, /::content/g];
    const _selectorReSuffix = "([>\\s~+[.,{:][\\s\\S]*)?$";
    const _polyfillHostRe = /-shadowcsshost/gim;
    const _colonHostRe = /:host/gim;
    const _colonSlottedRe = /::slotted/gim;
    const _colonHostContextRe = /:host-context/gim;
    const _commentRe = /\/\*\s*[\s\S]*?\*\//g;
    const stripComments = (input) => {
      return input.replace(_commentRe, "");
    };
    const _commentWithHashRe = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;
    const extractCommentsWithHash = (input) => {
      return input.match(_commentWithHashRe) || [];
    };
    const _ruleRe = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;
    const _curlyRe = /([{}])/g;
    const OPEN_CURLY = "{";
    const CLOSE_CURLY = "}";
    const BLOCK_PLACEHOLDER = "%BLOCK%";
    const processRules = (input, ruleCallback) => {
      const inputWithEscapedBlocks = escapeBlocks(input);
      let nextBlockIndex = 0;
      return inputWithEscapedBlocks.escapedString.replace(_ruleRe, (...m) => {
        const selector = m[2];
        let content = "";
        let suffix = m[4];
        let contentPrefix = "";
        if (suffix && suffix.startsWith("{" + BLOCK_PLACEHOLDER)) {
          content = inputWithEscapedBlocks.blocks[nextBlockIndex++];
          suffix = suffix.substring(BLOCK_PLACEHOLDER.length + 1);
          contentPrefix = "{";
        }
        const cssRule = {
          selector,
          content,
        };
        const rule = ruleCallback(cssRule);
        return `${m[1]}${rule.selector}${m[3]}${contentPrefix}${rule.content}${suffix}`;
      });
    };
    const escapeBlocks = (input) => {
      const inputParts = input.split(_curlyRe);
      const resultParts = [];
      const escapedBlocks = [];
      let bracketCount = 0;
      let currentBlockParts = [];
      for (let partIndex = 0; partIndex < inputParts.length; partIndex++) {
        const part = inputParts[partIndex];
        if (part === CLOSE_CURLY) {
          bracketCount--;
        }
        if (bracketCount > 0) {
          currentBlockParts.push(part);
        } else {
          if (currentBlockParts.length > 0) {
            escapedBlocks.push(currentBlockParts.join(""));
            resultParts.push(BLOCK_PLACEHOLDER);
            currentBlockParts = [];
          }
          resultParts.push(part);
        }
        if (part === OPEN_CURLY) {
          bracketCount++;
        }
      }
      if (currentBlockParts.length > 0) {
        escapedBlocks.push(currentBlockParts.join(""));
        resultParts.push(BLOCK_PLACEHOLDER);
      }
      const strEscapedBlocks = {
        escapedString: resultParts.join(""),
        blocks: escapedBlocks,
      };
      return strEscapedBlocks;
    };
    const insertPolyfillHostInCssText = (selector) => {
      selector = selector
        .replace(_colonHostContextRe, _polyfillHostContext)
        .replace(_colonHostRe, _polyfillHost)
        .replace(_colonSlottedRe, _polyfillSlotted);
      return selector;
    };
    const convertColonRule = (cssText, regExp, partReplacer) => {
      // m[1] = :host(-context), m[2] = contents of (), m[3] rest of rule
      return cssText.replace(regExp, (...m) => {
        if (m[2]) {
          const parts = m[2].split(",");
          const r = [];
          for (let i = 0; i < parts.length; i++) {
            const p = parts[i].trim();
            if (!p) break;
            r.push(partReplacer(_polyfillHostNoCombinator, p, m[3]));
          }
          return r.join(",");
        } else {
          return _polyfillHostNoCombinator + m[3];
        }
      });
    };
    const colonHostPartReplacer = (host, part, suffix) => {
      return host + part.replace(_polyfillHost, "") + suffix;
    };
    const convertColonHost = (cssText) => {
      return convertColonRule(cssText, _cssColonHostRe, colonHostPartReplacer);
    };
    const colonHostContextPartReplacer = (host, part, suffix) => {
      if (part.indexOf(_polyfillHost) > -1) {
        return colonHostPartReplacer(host, part, suffix);
      } else {
        return host + part + suffix + ", " + part + " " + host + suffix;
      }
    };
    const convertColonSlotted = (cssText, slotScopeId) => {
      const slotClass = "." + slotScopeId + " > ";
      const selectors = [];
      cssText = cssText.replace(_cssColonSlottedRe, (...m) => {
        if (m[2]) {
          const compound = m[2].trim();
          const suffix = m[3];
          const slottedSelector = slotClass + compound + suffix;
          let prefixSelector = "";
          for (let i = m[4] - 1; i >= 0; i--) {
            const char = m[5][i];
            if (char === "}" || char === ",") {
              break;
            }
            prefixSelector = char + prefixSelector;
          }
          const orgSelector = prefixSelector + slottedSelector;
          const addedSelector = `${prefixSelector.trimRight()}${slottedSelector.trim()}`;
          if (orgSelector.trim() !== addedSelector.trim()) {
            const updatedSelector = `${addedSelector}, ${orgSelector}`;
            selectors.push({
              orgSelector,
              updatedSelector,
            });
          }
          return slottedSelector;
        } else {
          return _polyfillHostNoCombinator + m[3];
        }
      });
      return {
        selectors,
        cssText,
      };
    };
    const convertColonHostContext = (cssText) => {
      return convertColonRule(
        cssText,
        _cssColonHostContextRe,
        colonHostContextPartReplacer
      );
    };
    const convertShadowDOMSelectors = (cssText) => {
      return _shadowDOMSelectorsRe.reduce(
        (result, pattern) => result.replace(pattern, " "),
        cssText
      );
    };
    const makeScopeMatcher = (scopeSelector) => {
      const lre = /\[/g;
      const rre = /\]/g;
      scopeSelector = scopeSelector.replace(lre, "\\[").replace(rre, "\\]");
      return new RegExp("^(" + scopeSelector + ")" + _selectorReSuffix, "m");
    };
    const selectorNeedsScoping = (selector, scopeSelector) => {
      const re = makeScopeMatcher(scopeSelector);
      return !re.test(selector);
    };
    const applySimpleSelectorScope = (
      selector,
      scopeSelector,
      hostSelector
    ) => {
      // In Android browser, the lastIndex is not reset when the regex is used in String.replace()
      _polyfillHostRe.lastIndex = 0;
      if (_polyfillHostRe.test(selector)) {
        const replaceBy = `.${hostSelector}`;
        return selector
          .replace(_polyfillHostNoCombinatorRe, (_, selector) => {
            return selector.replace(
              /([^:]*)(:*)(.*)/,
              (_, before, colon, after) => {
                return before + replaceBy + colon + after;
              }
            );
          })
          .replace(_polyfillHostRe, replaceBy + " ");
      }
      return scopeSelector + " " + selector;
    };
    const applyStrictSelectorScope = (
      selector,
      scopeSelector,
      hostSelector
    ) => {
      const isRe = /\[is=([^\]]*)\]/g;
      scopeSelector = scopeSelector.replace(isRe, (_, ...parts) => parts[0]);
      const className = "." + scopeSelector;
      const _scopeSelectorPart = (p) => {
        let scopedP = p.trim();
        if (!scopedP) {
          return "";
        }
        if (p.indexOf(_polyfillHostNoCombinator) > -1) {
          scopedP = applySimpleSelectorScope(p, scopeSelector, hostSelector);
        } else {
          // remove :host since it should be unnecessary
          const t = p.replace(_polyfillHostRe, "");
          if (t.length > 0) {
            const matches = t.match(/([^:]*)(:*)(.*)/);
            if (matches) {
              scopedP = matches[1] + className + matches[2] + matches[3];
            }
          }
        }
        return scopedP;
      };
      const safeContent = safeSelector(selector);
      selector = safeContent.content;
      let scopedSelector = "";
      let startIndex = 0;
      let res;
      const sep = /( |>|\+|~(?!=))\s*/g;
      // If a selector appears before :host it should not be shimmed as it
      // matches on ancestor elements and not on elements in the host's shadow
      // `:host-context(div)` is transformed to
      // `-shadowcsshost-no-combinatordiv, div -shadowcsshost-no-combinator`
      // the `div` is not part of the component in the 2nd selectors and should not be scoped.
      // Historically `component-tag:host` was matching the component so we also want to preserve
      // this behavior to avoid breaking legacy apps (it should not match).
      // The behavior should be:
      // - `tag:host` -> `tag[h]` (this is to avoid breaking legacy apps, should not match anything)
      // - `tag :host` -> `tag [h]` (`tag` is not scoped because it's considered part of a
      //   `:host-context(tag)`)
      const hasHost = selector.indexOf(_polyfillHostNoCombinator) > -1;
      // Only scope parts after the first `-shadowcsshost-no-combinator` when it is present
      let shouldScope = !hasHost;
      while ((res = sep.exec(selector)) !== null) {
        const separator = res[1];
        const part = selector.slice(startIndex, res.index).trim();
        shouldScope =
          shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
        const scopedPart = shouldScope ? _scopeSelectorPart(part) : part;
        scopedSelector += `${scopedPart} ${separator} `;
        startIndex = sep.lastIndex;
      }
      const part = selector.substring(startIndex);
      shouldScope = shouldScope || part.indexOf(_polyfillHostNoCombinator) > -1;
      scopedSelector += shouldScope ? _scopeSelectorPart(part) : part;
      // replace the placeholders with their original values
      return restoreSafeSelector(safeContent.placeholders, scopedSelector);
    };
    const scopeSelector = (
      selector,
      scopeSelectorText,
      hostSelector,
      slotSelector
    ) => {
      return selector
        .split(",")
        .map((shallowPart) => {
          if (slotSelector && shallowPart.indexOf("." + slotSelector) > -1) {
            return shallowPart.trim();
          }
          if (selectorNeedsScoping(shallowPart, scopeSelectorText)) {
            return applyStrictSelectorScope(
              shallowPart,
              scopeSelectorText,
              hostSelector
            ).trim();
          } else {
            return shallowPart.trim();
          }
        })
        .join(", ");
    };
    const scopeSelectors = (
      cssText,
      scopeSelectorText,
      hostSelector,
      slotSelector,
      commentOriginalSelector
    ) => {
      return processRules(cssText, (rule) => {
        let selector = rule.selector;
        let content = rule.content;
        if (rule.selector[0] !== "@") {
          selector = scopeSelector(
            rule.selector,
            scopeSelectorText,
            hostSelector,
            slotSelector
          );
        } else if (
          rule.selector.startsWith("@media") ||
          rule.selector.startsWith("@supports") ||
          rule.selector.startsWith("@page") ||
          rule.selector.startsWith("@document")
        ) {
          content = scopeSelectors(
            rule.content,
            scopeSelectorText,
            hostSelector,
            slotSelector
          );
        }
        const cssRule = {
          selector: selector.replace(/\s{2,}/g, " ").trim(),
          content,
        };
        return cssRule;
      });
    };
    const scopeCssText = (
      cssText,
      scopeId,
      hostScopeId,
      slotScopeId,
      commentOriginalSelector
    ) => {
      cssText = insertPolyfillHostInCssText(cssText);
      cssText = convertColonHost(cssText);
      cssText = convertColonHostContext(cssText);
      const slotted = convertColonSlotted(cssText, slotScopeId);
      cssText = slotted.cssText;
      cssText = convertShadowDOMSelectors(cssText);
      if (scopeId) {
        cssText = scopeSelectors(cssText, scopeId, hostScopeId, slotScopeId);
      }
      cssText = cssText.replace(
        /-shadowcsshost-no-combinator/g,
        `.${hostScopeId}`
      );
      cssText = cssText.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 ");
      return {
        cssText: cssText.trim(),
        slottedSelectors: slotted.selectors,
      };
    };
    const scopeCss = (cssText, scopeId, commentOriginalSelector) => {
      const hostScopeId = scopeId + "-h";
      const slotScopeId = scopeId + "-s";
      const commentsWithHash = extractCommentsWithHash(cssText);
      cssText = stripComments(cssText);
      const orgSelectors = [];
      if (commentOriginalSelector) {
        const processCommentedSelector = (rule) => {
          const placeholder = `/*!@___${orgSelectors.length}___*/`;
          const comment = `/*!@${rule.selector}*/`;
          orgSelectors.push({ placeholder, comment });
          rule.selector = placeholder + rule.selector;
          return rule;
        };
        cssText = processRules(cssText, (rule) => {
          if (rule.selector[0] !== "@") {
            return processCommentedSelector(rule);
          } else if (
            rule.selector.startsWith("@media") ||
            rule.selector.startsWith("@supports") ||
            rule.selector.startsWith("@page") ||
            rule.selector.startsWith("@document")
          ) {
            rule.content = processRules(rule.content, processCommentedSelector);
            return rule;
          }
          return rule;
        });
      }
      const scoped = scopeCssText(cssText, scopeId, hostScopeId, slotScopeId);
      cssText = [scoped.cssText, ...commentsWithHash].join("\n");
      if (commentOriginalSelector) {
        orgSelectors.forEach(({ placeholder, comment }) => {
          cssText = cssText.replace(placeholder, comment);
        });
      }
      scoped.slottedSelectors.forEach((slottedSelector) => {
        cssText = cssText.replace(
          slottedSelector.orgSelector,
          slottedSelector.updatedSelector
        );
      });
      return cssText;
    };

    exports.scopeCss = scopeCss;

    /***/
  },

  /***/ 71690: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    const constants = __webpack_require__(18524);
    const storage = __webpack_require__(21967);

    const imageFileType = new Set([
      "apng",
      "bmp",
      "gif",
      "ico",
      "cur",
      "jpg",
      "jpeg",
      "jfif",
      "pjpeg",
      "pjp",
      "png",
      "svg",
      "tif",
      "tiff",
      "webp",
    ]);
    const calcKey = (file, fileToKey) => {
      const { name, size, type } = file;
      let key = encodeURI(name);
      if (fileToKey) {
        if (typeof fileToKey === "string") {
          key = fileToKey;
        } else if (typeof fileToKey === "function") {
          key = fileToKey({ name, size, type });
        } else {
          key = encodeURI(JSON.stringify(fileToKey));
        }
        if (!key) {
          key = "empty_key";
        }
      }
      return key.replace(/\s/g, "_");
    };
    const getStorageObject = async (key, level, track, identityId, logger) => {
      if (!storage.Storage || typeof storage.Storage.get !== "function") {
        throw new Error(constants.NO_STORAGE_MODULE_FOUND);
      }
      try {
        const src = await storage.Storage.get(key, {
          level,
          track,
          identityId,
        });
        logger.debug("Storage image get", src);
        return src;
      } catch (error) {
        throw new Error(error);
      }
    };
    const readFileAsync = (blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = () => {
          reject("Failed to read file!");
          reader.abort();
        };
        reader.readAsText(blob);
      });
    };
    const getTextSource = async (key, level, track, identityId, logger) => {
      if (!storage.Storage || typeof storage.Storage.get !== "function") {
        throw new Error(constants.NO_STORAGE_MODULE_FOUND);
      }
      try {
        const textSrc = await storage.Storage.get(key, {
          download: true,
          level,
          track,
          identityId,
        });
        logger.debug(textSrc);
        const text = await readFileAsync(textSrc["Body"]);
        return text;
      } catch (error) {
        throw new Error(error);
      }
    };
    const putStorageObject = async (
      key,
      body,
      level,
      track,
      contentType,
      logger
    ) => {
      if (!storage.Storage || typeof storage.Storage.put !== "function") {
        throw new Error(constants.NO_STORAGE_MODULE_FOUND);
      }
      try {
        const data = await storage.Storage.put(key, body, {
          contentType,
          level,
          track,
        });
        logger.debug("Upload data", data);
      } catch (error) {
        throw new Error(error);
      }
    };

    exports.calcKey = calcKey;
    exports.getStorageObject = getStorageObject;
    exports.getTextSource = getTextSource;
    exports.imageFileType = imageFileType;
    exports.putStorageObject = putStorageObject;

    /***/
  },

  /***/ 18332: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    (function (AccessLevel) {
      AccessLevel["Public"] = "public";
      AccessLevel["Private"] = "private";
      AccessLevel["Protected"] = "protected";
    })(exports.AccessLevel || (exports.AccessLevel = {}));

    /***/
  },

  /***/ 78362: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    const index = __webpack_require__(36542);
    const core = __webpack_require__(4966);

    /*
 Stencil Client Patch v1.15.0 | MIT Licensed | https://stenciljs.com
 */
    const getDynamicImportFunction = (namespace) =>
      `__sc_import_${namespace.replace(/\s|-/g, "_")}`;
    const patchEsm = () => {
      // NOTE!! This fn cannot use async/await!
      // @ts-ignore
      if (
        !(
          index.CSS &&
          index.CSS.supports &&
          index.CSS.supports("color", "var(--c)")
        )
      ) {
        // @ts-ignore
        return Promise.resolve()
          .then(function () {
            return __webpack_require__(
              /* webpackChunkName: "polyfills-css-shim" */ 86309
            );
          })
          .then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
              return index.plt.$cssShim$.i();
            } else {
              // for better minification
              return 0;
            }
          });
      }
      return index.promiseResolve();
    };
    const patchBrowser = () => {
      {
        // shim css vars
        index.plt.$cssShim$ = index.win.__cssshim;
      }
      // @ts-ignore
      const scriptElm = Array.from(index.doc.querySelectorAll("script")).find(
        (s) =>
          new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(
            s.src
          ) || s.getAttribute("data-stencil-namespace") === index.NAMESPACE
      );
      const opts = scriptElm["data-opts"] || {};
      if (
        "onbeforeload" in scriptElm &&
        !history.scrollRestoration /* IS_ESM_BUILD */
      ) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
          then() {
            /* promise noop */
          },
        };
      }
      {
        opts.resourcesUrl = new URL(
          ".",
          new URL(
            scriptElm.getAttribute("data-resources-url") || scriptElm.src,
            index.win.location.href
          )
        ).href;
        {
          patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!index.win.customElements) {
          // module support, but no custom elements support (Old Edge)
          // @ts-ignore
          return Promise.resolve()
            .then(function () {
              return __webpack_require__(
                /* webpackChunkName: "polyfills-dom" */ 36099
              );
            })
            .then(() => opts);
        }
      }
      return index.promiseResolve(opts);
    };
    const patchDynamicImport = (base, orgScriptElm) => {
      const importFunctionName = getDynamicImportFunction(index.NAMESPACE);
      try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        index.win[importFunctionName] = new Function(
          "w",
          `return import(w);//${Math.random()}`
        );
      } catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        index.win[importFunctionName] = (src) => {
          const url = new URL(src, base).href;
          let mod = moduleMap.get(url);
          if (!mod) {
            const script = index.doc.createElement("script");
            script.type = "module";
            script.crossOrigin = orgScriptElm.crossOrigin;
            script.src = URL.createObjectURL(
              new Blob(
                [
                  `import * as m from '${url}'; window.${importFunctionName}.m = m;`,
                ],
                { type: "application/javascript" }
              )
            );
            mod = new Promise((resolve) => {
              script.onload = () => {
                resolve(index.win[importFunctionName].m);
                script.remove();
              };
            });
            moduleMap.set(url, mod);
            index.doc.head.appendChild(script);
          }
          return mod;
        };
      }
    };

    /* eslint-disable */
    if (core.browserOrNode().isBrowser) {
      let customStyles = document.createElement("style");
      customStyles.appendChild(
        document.createTextNode(`
    :root {
      /* Typography */
      --amplify-font-family: 'Amazon Ember', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

      --amplify-text-xxs: 0.75rem;
      --amplify-text-xs: 0.81rem;
      --amplify-text-sm: 0.875rem;
      --amplify-text-md: 1rem;
      --amplify-text-md-sub: 1.15rem;
      --amplify-text-lg: 1.5rem;
      --amplify-text-xl: 2rem;
      --amplify-text-xxl: 2.5rem;

      /* Colors */
      --amplify-primary-color: #ff9900;
      --amplify-primary-contrast: var(--amplify-white);
      --amplify-primary-tint: #ffac31;
      --amplify-primary-shade: #e88b01;

      --amplify-secondary-color: #152939;
      --amplify-secondary-contrast: var(--amplify-white);
      --amplify-secondary-tint: #31465f;
      --amplify-secondary-shade: #1F2A37;

      --amplify-tertiary-color: #5d8aff;
      --amplify-tertiary-contrast: var(--amplify-white);
      --amplify-tertiary-tint: #7da1ff;
      --amplify-tertiary-shade: #537BE5;

      --amplify-background-color: var(--amplify-white);

      /* Neutral */
      --amplify-grey: #828282;
      --amplify-light-grey: #c4c4c4;
      --amplify-white: #ffffff;
      --amplify-smoke-white: #f5f5f5;
      --amplify-red: #dd3f5b;
      --amplify-blue: #099ac8;
    }
  `)
      );
      let parentElement = document.getElementsByTagName("head")[0];
      const firstChild = parentElement.firstChild;
      parentElement.insertBefore(customStyles, firstChild);
    }

    exports.patchBrowser = patchBrowser;
    exports.patchEsm = patchEsm;

    /***/
  },

  /***/ 25365: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    module.exports = __webpack_require__(85779);

    /***/
  },

  /***/ 90540: /***/ (
    module,
    __unused_webpack_exports,
    __webpack_require__
  ) => {
    module.exports = __webpack_require__(60698);
    module.exports.applyPolyfills = function () {
      return Promise.resolve();
    };

    /***/
  },

  /***/ 12899: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    /* eslint-disable */
    /* tslint:disable */
    /* auto-generated react proxies */
    var react_component_lib_1 = __webpack_require__(48110);
    var loader_1 = __webpack_require__(90540);
    loader_1.applyPolyfills().then(function () {
      return loader_1.defineCustomElements();
    });
    exports.AmplifyAmazonButton = react_component_lib_1.createReactComponent(
      "amplify-amazon-button"
    );
    exports.AmplifyAuthContainer = react_component_lib_1.createReactComponent(
      "amplify-auth-container"
    );
    exports.AmplifyAuthFields = react_component_lib_1.createReactComponent(
      "amplify-auth-fields"
    );
    exports.AmplifyAuth0Button = react_component_lib_1.createReactComponent(
      "amplify-auth0-button"
    );
    exports.AmplifyAuthenticator = react_component_lib_1.createReactComponent(
      "amplify-authenticator"
    );
    exports.AmplifyButton =
      react_component_lib_1.createReactComponent("amplify-button");
    exports.AmplifyChatbot =
      react_component_lib_1.createReactComponent("amplify-chatbot");
    exports.AmplifyCheckbox =
      react_component_lib_1.createReactComponent("amplify-checkbox");
    exports.AmplifyCodeField =
      react_component_lib_1.createReactComponent("amplify-code-field");
    exports.AmplifyConfirmSignIn = react_component_lib_1.createReactComponent(
      "amplify-confirm-sign-in"
    );
    exports.AmplifyConfirmSignUp = react_component_lib_1.createReactComponent(
      "amplify-confirm-sign-up"
    );
    exports.AmplifyContainer =
      react_component_lib_1.createReactComponent("amplify-container");
    exports.AmplifyCountryDialCode = react_component_lib_1.createReactComponent(
      "amplify-country-dial-code"
    );
    exports.AmplifyEmailField = react_component_lib_1.createReactComponent(
      "amplify-email-field"
    );
    exports.AmplifyFacebookButton = react_component_lib_1.createReactComponent(
      "amplify-facebook-button"
    );
    exports.AmplifyFederatedButtons =
      react_component_lib_1.createReactComponent("amplify-federated-buttons");
    exports.AmplifyFederatedSignIn = react_component_lib_1.createReactComponent(
      "amplify-federated-sign-in"
    );
    exports.AmplifyForgotPassword = react_component_lib_1.createReactComponent(
      "amplify-forgot-password"
    );
    exports.AmplifyFormField =
      react_component_lib_1.createReactComponent("amplify-form-field");
    exports.AmplifyFormSection = react_component_lib_1.createReactComponent(
      "amplify-form-section"
    );
    exports.AmplifyGoogleButton = react_component_lib_1.createReactComponent(
      "amplify-google-button"
    );
    exports.AmplifyGreetings =
      react_component_lib_1.createReactComponent("amplify-greetings");
    exports.AmplifyHint =
      react_component_lib_1.createReactComponent("amplify-hint");
    exports.AmplifyIcon =
      react_component_lib_1.createReactComponent("amplify-icon");
    exports.AmplifyIconButton = react_component_lib_1.createReactComponent(
      "amplify-icon-button"
    );
    exports.AmplifyInput =
      react_component_lib_1.createReactComponent("amplify-input");
    exports.AmplifyLabel =
      react_component_lib_1.createReactComponent("amplify-label");
    exports.AmplifyLink =
      react_component_lib_1.createReactComponent("amplify-link");
    exports.AmplifyLoadingSpinner = react_component_lib_1.createReactComponent(
      "amplify-loading-spinner"
    );
    exports.AmplifyNav =
      react_component_lib_1.createReactComponent("amplify-nav");
    exports.AmplifyOauthButton = react_component_lib_1.createReactComponent(
      "amplify-oauth-button"
    );
    exports.AmplifyPasswordField = react_component_lib_1.createReactComponent(
      "amplify-password-field"
    );
    exports.AmplifyPhoneField = react_component_lib_1.createReactComponent(
      "amplify-phone-field"
    );
    exports.AmplifyPhotoPicker = react_component_lib_1.createReactComponent(
      "amplify-photo-picker"
    );
    exports.AmplifyPicker =
      react_component_lib_1.createReactComponent("amplify-picker");
    exports.AmplifyRadioButton = react_component_lib_1.createReactComponent(
      "amplify-radio-button"
    );
    exports.AmplifyRequireNewPassword =
      react_component_lib_1.createReactComponent(
        "amplify-require-new-password"
      );
    exports.AmplifyS3Album =
      react_component_lib_1.createReactComponent("amplify-s3-album");
    exports.AmplifyS3Image =
      react_component_lib_1.createReactComponent("amplify-s3-image");
    exports.AmplifyS3ImagePicker = react_component_lib_1.createReactComponent(
      "amplify-s3-image-picker"
    );
    exports.AmplifyS3Text =
      react_component_lib_1.createReactComponent("amplify-s3-text");
    exports.AmplifyS3TextPicker = react_component_lib_1.createReactComponent(
      "amplify-s3-text-picker"
    );
    exports.AmplifySection =
      react_component_lib_1.createReactComponent("amplify-section");
    exports.AmplifySelect =
      react_component_lib_1.createReactComponent("amplify-select");
    exports.AmplifySelectMfaType = react_component_lib_1.createReactComponent(
      "amplify-select-mfa-type"
    );
    exports.AmplifySignIn =
      react_component_lib_1.createReactComponent("amplify-sign-in");
    exports.AmplifySignInButton = react_component_lib_1.createReactComponent(
      "amplify-sign-in-button"
    );
    exports.AmplifySignOut =
      react_component_lib_1.createReactComponent("amplify-sign-out");
    exports.AmplifySignUp =
      react_component_lib_1.createReactComponent("amplify-sign-up");
    exports.AmplifyStrike =
      react_component_lib_1.createReactComponent("amplify-strike");
    exports.AmplifyToast =
      react_component_lib_1.createReactComponent("amplify-toast");
    exports.AmplifyTooltip =
      react_component_lib_1.createReactComponent("amplify-tooltip");
    exports.AmplifyTotpSetup =
      react_component_lib_1.createReactComponent("amplify-totp-setup");
    exports.AmplifyUsernameField = react_component_lib_1.createReactComponent(
      "amplify-username-field"
    );
    exports.AmplifyVerifyContact = react_component_lib_1.createReactComponent(
      "amplify-verify-contact"
    );
    //# sourceMappingURL=components.js.map

    /***/
  },

  /***/ 67635: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(__webpack_require__(12899));
    var withAuthenticator_1 = __webpack_require__(46166);
    exports.withAuthenticator = withAuthenticator_1.withAuthenticator;
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 46998: /***/ function (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) {
    "use strict";

    var __extends =
      (this && this.__extends) ||
      (function () {
        var extendStatics = function (d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        return function (d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        };
      })();
    var __assign =
      (this && this.__assign) ||
      function () {
        __assign =
          Object.assign ||
          function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    var __rest =
      (this && this.__rest) ||
      function (s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]];
          }
        return t;
      };
    var __importDefault =
      (this && this.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(__webpack_require__(67294));
    var index_1 = __webpack_require__(79713);
    exports.createReactComponent = function (tagName) {
      var displayName = index_1.dashToPascalCase(tagName);
      var ReactComponent = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
          var _this = _super.call(this, props) || this;
          _this.ref = react_1.default.createRef();
          return _this;
        }
        class_1.prototype.componentDidMount = function () {
          this.componentDidUpdate(this.props);
        };
        class_1.prototype.componentDidUpdate = function (prevProps) {
          var node = this.ref.current;
          index_1.attachEventProps(node, this.props, prevProps);
        };
        class_1.prototype.render = function () {
          var _a = this.props,
            children = _a.children,
            forwardedRef = _a.forwardedRef,
            style = _a.style,
            className = _a.className,
            ref = _a.ref,
            cProps = __rest(_a, [
              "children",
              "forwardedRef",
              "style",
              "className",
              "ref",
            ]);
          var propsToPass = Object.keys(cProps).reduce(function (acc, name) {
            var isEventProp =
              name.indexOf("on") === 0 && name[2] === name[2].toUpperCase();
            var isDataProp = name.indexOf("data-") === 0;
            var isAriaProp = name.indexOf("aria-") === 0;
            if (isEventProp) {
              var eventName = name.substring(2).toLowerCase();
              if (
                typeof document !== "undefined" &&
                index_1.isCoveredByReact(eventName)
              ) {
                acc[name] = cProps[name];
              }
            } else if (isDataProp || isAriaProp) {
              acc[name] = cProps[name];
            }
            return acc;
          }, {});
          var newProps = __assign(__assign({}, propsToPass), {
            ref: this.ref,
            style: style,
            className: className,
          });
          return react_1.default.createElement(tagName, newProps, children);
        };
        Object.defineProperty(class_1, "displayName", {
          get: function () {
            return displayName;
          },
          enumerable: true,
          configurable: true,
        });
        return class_1;
      })(react_1.default.Component);
      return index_1.createForwardRef(ReactComponent, displayName);
    };
    //# sourceMappingURL=createComponent.js.map

    /***/
  },

  /***/ 62871: /***/ function (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) {
    "use strict";

    var __extends =
      (this && this.__extends) ||
      (function () {
        var extendStatics = function (d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        return function (d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        };
      })();
    var __assign =
      (this && this.__assign) ||
      function () {
        __assign =
          Object.assign ||
          function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __generator =
      (this && this.__generator) ||
      function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                      ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
    var __rest =
      (this && this.__rest) ||
      function (s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]];
          }
        return t;
      };
    var __importDefault =
      (this && this.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(__webpack_require__(67294));
    var attachEventProps_1 = __webpack_require__(39518);
    function createControllerComponent(displayName, controller) {
      var dismissEventName = "on" + displayName + "DidDismiss";
      return /** @class */ (function (_super) {
        __extends(ReactControllerComponent, _super);
        function ReactControllerComponent(props) {
          return _super.call(this, props) || this;
        }
        Object.defineProperty(ReactControllerComponent, "displayName", {
          get: function () {
            return displayName;
          },
          enumerable: true,
          configurable: true,
        });
        ReactControllerComponent.prototype.componentDidMount = function () {
          return __awaiter(this, void 0, void 0, function () {
            var isOpen;
            return __generator(this, function (_a) {
              isOpen = this.props.isOpen;
              if (isOpen) {
                this.present();
              }
              return [2 /*return*/];
            });
          });
        };
        ReactControllerComponent.prototype.componentDidUpdate = function (
          prevProps
        ) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (
                    prevProps.isOpen !== this.props.isOpen &&
                    this.props.isOpen === true
                  ) {
                    this.present(prevProps);
                  }
                  if (
                    !(
                      this.controller &&
                      prevProps.isOpen !== this.props.isOpen &&
                      this.props.isOpen === false
                    )
                  )
                    return [3 /*break*/, 2];
                  return [4 /*yield*/, this.controller.dismiss()];
                case 1:
                  _a.sent();
                  _a.label = 2;
                case 2:
                  return [2 /*return*/];
              }
            });
          });
        };
        ReactControllerComponent.prototype.present = function (prevProps) {
          return __awaiter(this, void 0, void 0, function () {
            var _a, isOpen, onDidDismiss, cProps, elementProps, _b;
            var _c;
            return __generator(this, function (_d) {
              switch (_d.label) {
                case 0:
                  (_a = this.props),
                    (isOpen = _a.isOpen),
                    (onDidDismiss = _a.onDidDismiss),
                    (cProps = __rest(_a, ["isOpen", "onDidDismiss"]));
                  elementProps = __assign(
                    __assign({}, cProps),
                    ((_c = {}), (_c[dismissEventName] = onDidDismiss), _c)
                  );
                  _b = this;
                  return [
                    4 /*yield*/,
                    controller.create(__assign({}, elementProps)),
                  ];
                case 1:
                  _b.controller = _d.sent();
                  attachEventProps_1.attachEventProps(
                    this.controller,
                    elementProps,
                    prevProps
                  );
                  this.controller.present();
                  return [2 /*return*/];
              }
            });
          });
        };
        ReactControllerComponent.prototype.render = function () {
          return null;
        };
        return ReactControllerComponent;
      })(react_1.default.Component);
    }
    exports.createControllerComponent = createControllerComponent;
    //# sourceMappingURL=createControllerComponent.js.map

    /***/
  },

  /***/ 44843: /***/ function (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) {
    "use strict";

    var __extends =
      (this && this.__extends) ||
      (function () {
        var extendStatics = function (d, b) {
          extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (d, b) {
                d.__proto__ = b;
              }) ||
            function (d, b) {
              for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
          return extendStatics(d, b);
        };
        return function (d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype =
            b === null
              ? Object.create(b)
              : ((__.prototype = b.prototype), new __());
        };
      })();
    var __assign =
      (this && this.__assign) ||
      function () {
        __assign =
          Object.assign ||
          function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __generator =
      (this && this.__generator) ||
      function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                      ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
    var __rest =
      (this && this.__rest) ||
      function (s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]];
          }
        return t;
      };
    var __importDefault =
      (this && this.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(__webpack_require__(67294));
    var react_dom_1 = __importDefault(__webpack_require__(73935));
    var attachEventProps_1 = __webpack_require__(39518);
    function createOverlayComponent(displayName, controller) {
      var dismissEventName = "on" + displayName + "DidDismiss";
      return /** @class */ (function (_super) {
        __extends(ReactOverlayComponent, _super);
        function ReactOverlayComponent(props) {
          var _this = _super.call(this, props) || this;
          _this.el = document.createElement("div");
          return _this;
        }
        Object.defineProperty(ReactOverlayComponent, "displayName", {
          get: function () {
            return displayName;
          },
          enumerable: true,
          configurable: true,
        });
        ReactOverlayComponent.prototype.componentDidMount = function () {
          if (this.props.isOpen) {
            this.present();
          }
        };
        ReactOverlayComponent.prototype.componentDidUpdate = function (
          prevProps
        ) {
          return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  if (
                    prevProps.isOpen !== this.props.isOpen &&
                    this.props.isOpen === true
                  ) {
                    this.present(prevProps);
                  }
                  if (
                    !(
                      this.controller &&
                      prevProps.isOpen !== this.props.isOpen &&
                      this.props.isOpen === false
                    )
                  )
                    return [3 /*break*/, 2];
                  return [4 /*yield*/, this.controller.dismiss()];
                case 1:
                  _a.sent();
                  _a.label = 2;
                case 2:
                  return [2 /*return*/];
              }
            });
          });
        };
        ReactOverlayComponent.prototype.present = function (prevProps) {
          return __awaiter(this, void 0, void 0, function () {
            var _a,
              children,
              isOpen,
              _b,
              onDidDismiss,
              cProps,
              elementProps,
              _c;
            var _d;
            return __generator(this, function (_e) {
              switch (_e.label) {
                case 0:
                  (_a = this.props),
                    (children = _a.children),
                    (isOpen = _a.isOpen),
                    (_b = _a.onDidDismiss),
                    (onDidDismiss = _b === void 0 ? function () {} : _b),
                    (cProps = __rest(_a, [
                      "children",
                      "isOpen",
                      "onDidDismiss",
                    ]));
                  elementProps = __assign(
                    __assign({}, cProps),
                    ((_d = {}), (_d[dismissEventName] = onDidDismiss), _d)
                  );
                  _c = this;
                  return [
                    4 /*yield*/,
                    controller.create(
                      __assign(__assign({}, elementProps), {
                        component: this.el,
                        componentProps: {},
                      })
                    ),
                  ];
                case 1:
                  _c.controller = _e.sent();
                  attachEventProps_1.attachEventProps(
                    this.controller,
                    elementProps,
                    prevProps
                  );
                  this.controller.present();
                  return [2 /*return*/];
              }
            });
          });
        };
        ReactOverlayComponent.prototype.render = function () {
          return react_dom_1.default.createPortal(this.props.children, this.el);
        };
        return ReactOverlayComponent;
      })(react_1.default.Component);
    }
    exports.createOverlayComponent = createOverlayComponent;
    //# sourceMappingURL=createOverlayComponent.js.map

    /***/
  },

  /***/ 48110: /***/ (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    var createComponent_1 = __webpack_require__(46998);
    exports.createReactComponent = createComponent_1.createReactComponent;
    var createControllerComponent_1 = __webpack_require__(62871);
    exports.createControllerComponent =
      createControllerComponent_1.createControllerComponent;
    var createOverlayComponent_1 = __webpack_require__(44843);
    exports.createOverlayComponent =
      createOverlayComponent_1.createOverlayComponent;
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 39518: /***/ (__unused_webpack_module, exports) => {
    "use strict";

    Object.defineProperty(exports, "__esModule", { value: true });
    function attachEventProps(node, newProps, oldProps) {
      if (oldProps === void 0) {
        oldProps = {};
      }
      var className = getClassName(node.classList, newProps, oldProps);
      if (className) {
        node.className = className;
      }
      Object.keys(newProps).forEach(function (name) {
        if (
          name === "children" ||
          name === "style" ||
          name === "ref" ||
          name === "className"
        ) {
          return;
        }
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
          var eventName = name.substring(2);
          var eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
          if (!isCoveredByReact(eventNameLc)) {
            syncEvent(node, eventNameLc, newProps[name]);
          }
        } else {
          node[name] = newProps[name];
        }
      });
    }
    exports.attachEventProps = attachEventProps;
    function getClassName(classList, newProps, oldProps) {
      // map the classes to Maps for performance
      var currentClasses = arrayToMap(classList);
      var incomingPropClasses = arrayToMap(
        newProps.className ? newProps.className.split(" ") : []
      );
      var oldPropClasses = arrayToMap(
        oldProps.className ? oldProps.className.split(" ") : []
      );
      var finalClassNames = [];
      // loop through each of the current classes on the component
      // to see if it should be a part of the classNames added
      currentClasses.forEach(function (currentClass) {
        if (incomingPropClasses.has(currentClass)) {
          // add it as its already included in classnames coming in from newProps
          finalClassNames.push(currentClass);
          incomingPropClasses.delete(currentClass);
        } else if (!oldPropClasses.has(currentClass)) {
          // add it as it has NOT been removed by user
          finalClassNames.push(currentClass);
        }
      });
      incomingPropClasses.forEach(function (s) {
        return finalClassNames.push(s);
      });
      return finalClassNames.join(" ");
    }
    exports.getClassName = getClassName;
    /**
     * Checks if an event is supported in the current execution environment.
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function isCoveredByReact(eventNameSuffix, doc) {
      if (doc === void 0) {
        doc = document;
      }
      var eventName = "on" + eventNameSuffix;
      var isSupported = eventName in doc;
      if (!isSupported) {
        var element = doc.createElement("div");
        element.setAttribute(eventName, "return;");
        isSupported = typeof element[eventName] === "function";
      }
      return isSupported;
    }
    exports.isCoveredByReact = isCoveredByReact;
    function syncEvent(node, eventName, newEventHandler) {
      var eventStore = node.__events || (node.__events = {});
      var oldEventHandler = eventStore[eventName];
      // Remove old listener so they don't double up.
      if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
      }
      if (newEventHandler != null) {
        // Bind new listener.
        node.addEventListener(
          eventName,
          (eventStore[eventName] = function handler(e) {
            newEventHandler.call(this, e);
          })
        );
      }
    }
    exports.syncEvent = syncEvent;
    function arrayToMap(arr) {
      var map = new Map();
      arr.forEach(function (s) {
        return map.set(s, s);
      });
      return map;
    }
    //# sourceMappingURL=attachEventProps.js.map

    /***/
  },

  /***/ 79713: /***/ function (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) {
    "use strict";

    var __assign =
      (this && this.__assign) ||
      function () {
        __assign =
          Object.assign ||
          function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    function __export(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    var __importDefault =
      (this && this.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(__webpack_require__(67294));
    exports.dashToPascalCase = function (str) {
      return str
        .toLowerCase()
        .split("-")
        .map(function (segment) {
          return segment.charAt(0).toUpperCase() + segment.slice(1);
        })
        .join("");
    };
    exports.createForwardRef = function (ReactComponent, displayName) {
      var forwardRef = function (props, ref) {
        return react_1.default.createElement(
          ReactComponent,
          __assign({}, props, { forwardedRef: ref })
        );
      };
      forwardRef.displayName = displayName;
      return react_1.default.forwardRef(forwardRef);
    };
    __export(__webpack_require__(39518));
    //# sourceMappingURL=index.js.map

    /***/
  },

  /***/ 46166: /***/ function (
    __unused_webpack_module,
    exports,
    __webpack_require__
  ) {
    "use strict";

    var __assign =
      (this && this.__assign) ||
      function () {
        __assign =
          Object.assign ||
          function (t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
          };
        return __assign.apply(this, arguments);
      };
    var __awaiter =
      (this && this.__awaiter) ||
      function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
    var __generator =
      (this && this.__generator) ||
      function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                      ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                      : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
    var __read =
      (this && this.__read) ||
      function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error: error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
    var __importDefault =
      (this && this.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(__webpack_require__(67294));
    var auth_1 = __webpack_require__(67375);
    var _1 = __webpack_require__(67635);
    var ui_components_1 = __webpack_require__(25365);
    var core_1 = __webpack_require__(4966);
    var logger = new core_1.Logger("withAuthenticator");
    function withAuthenticator(Component, authenticatorProps) {
      var AppWithAuthenticator = function (props) {
        var _a = __read(react_1.default.useState(false), 2),
          signedIn = _a[0],
          setSignedIn = _a[1];
        react_1.default.useEffect(function () {
          auth_1.appendToCognitoUserAgent("withAuthenticator");
          // checkUser returns an "unsubscribe" function to stop side-effects
          return checkUser();
        }, []);
        function checkUser() {
          setUser();
          return ui_components_1.onAuthUIStateChange(function (authState) {
            if (authState === ui_components_1.AuthState.SignedIn) {
              setSignedIn(true);
            } else if (authState === ui_components_1.AuthState.SignedOut) {
              setSignedIn(false);
            }
          });
        }
        function setUser() {
          return __awaiter(this, void 0, void 0, function () {
            var user, err_1;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  _a.trys.push([0, 2, , 3]);
                  return [4 /*yield*/, auth_1.Auth.currentAuthenticatedUser()];
                case 1:
                  user = _a.sent();
                  if (user) setSignedIn(true);
                  return [3 /*break*/, 3];
                case 2:
                  err_1 = _a.sent();
                  logger.debug(err_1);
                  return [3 /*break*/, 3];
                case 3:
                  return [2 /*return*/];
              }
            });
          });
        }
        if (!signedIn) {
          return react_1.default.createElement(
            _1.AmplifyContainer,
            null,
            react_1.default.createElement(
              _1.AmplifyAuthContainer,
              null,
              react_1.default.createElement(
                _1.AmplifyAuthenticator,
                __assign({}, authenticatorProps, props)
              )
            )
          );
        }
        return react_1.default.createElement(Component, __assign({}, props));
      };
      return AppWithAuthenticator;
    }
    exports.withAuthenticator = withAuthenticator;
    //# sourceMappingURL=withAuthenticator.js.map

    /***/
  },
};
