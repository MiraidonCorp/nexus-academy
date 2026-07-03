import { sendGTMEvent } from '@next/third-parties/google';

export type UserType = 'member' | 'anonymous';

/**
 * Pushes the current auth state to the dataLayer as a persistent variable
 * (not just a one-off event) so any GTM tag can segment on {{DLV - user_type}}.
 */
export function trackUserType(userType: UserType) {
  sendGTMEvent({ event: 'user_data', user_type: userType });
}

export function trackPageView(path: string) {
  sendGTMEvent({ event: 'page_view', page_path: path });
}

interface ButtonClickParams {
  /** Visible label or accessible name of the control. */
  label: string;
  /** Where on the site the control lives, e.g. "nav-desktop", "home-hero". */
  location: string;
  /** Optional link destination, for CTAs implemented as <Link>. */
  href?: string;
  [key: string]: unknown;
}

export function trackButtonClick({ label, location, href, ...rest }: ButtonClickParams) {
  sendGTMEvent({
    event: 'button_click',
    button_label: label,
    button_location: location,
    ...(href ? { button_href: href } : {}),
    ...rest,
  });
}

interface FormSubmitParams {
  formName: string;
  location: string;
  success?: boolean;
  [key: string]: unknown;
}

export function trackFormSubmit({ formName, location, success = true, ...rest }: FormSubmitParams) {
  sendGTMEvent({
    event: 'form_submit',
    form_name: formName,
    form_location: location,
    form_success: success,
    ...rest,
  });
}

interface InteractionParams {
  /** Kind of interaction, e.g. "tab_switch", "filter", "menu_toggle", "accordion". */
  type: string;
  label: string;
  location: string;
  [key: string]: unknown;
}

/** Tracks lower-intent interactivity — tabs, filters, menus, accordions ("hotspots"). */
export function trackInteraction({ type, label, location, ...rest }: InteractionParams) {
  sendGTMEvent({
    event: 'user_interaction',
    interaction_type: type,
    interaction_label: label,
    interaction_location: location,
    ...rest,
  });
}

interface AuthEventParams {
  method: 'email' | 'google' | 'github';
  location: string;
}

export function trackLogin({ method, location }: AuthEventParams) {
  sendGTMEvent({ event: 'login', method, login_location: location });
}

export function trackSignUp({ method, location }: AuthEventParams) {
  sendGTMEvent({ event: 'sign_up', method, signup_location: location });
}

export function trackLogout(location: string) {
  sendGTMEvent({ event: 'logout', logout_location: location });
}
