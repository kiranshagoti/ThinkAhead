import React from 'react'

const Settings = () => {
  return (
    <div>
      <h1>Account Settings</h1>

      <hr />
      <h3>Account Information:</h3>
      <button>Manage</button>
      <hr />
      <p>Manage your profile, email addresses and account password.</p>

      <h3>Subscription and Billing:</h3>
      <button>Purchase a subscription</button>
      <hr />
      <p>Your ThinkAhead trial expires soon. Please provide your credit card information to continue your subscription for just €50/year.</p>

      <h3>My Current Situation:</h3>
      <button>Manage</button>
      <hr />
      <p>Had any big life changes since you began using ThinkAhead? Keep us updated so that we can show you the next best steps to take.</p>

      <h3>Two-Step Verification:</h3>
      <button>Manage</button>
      <hr />
      <p>Two-Step Verification is not enabled for your account. We recommend that you turn on this extra layer of security as soon as possible.</p>

      <h3>Email preferences:</h3>
      <button>Manage</button>
      <hr/>
      <p>Go here to manage your email preferences.</p>

      <h3>Delete your account:</h3>
      <button>Delete My Account</button>

    </div>
  )
}

export default Settings
