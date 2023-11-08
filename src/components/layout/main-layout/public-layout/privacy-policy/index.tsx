import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
import { Collapse } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

interface Props {}
const PrivacyPolicy: React.FC<Props> = observer(({ ...props }) => {
  const onChange = (key: string | string[]) => {};
  return (
    <div className={style.mainWrraper}>
      <h1 style={{textAlign:'center', fontSize: '30px'}}>Privacy policy</h1>
      <p style={{textAlign:'center', fontSize: '18px'}}>Updated​: April 03,​ 2023</p>
      <p style={{ marginTop: "20px", lineHeight: '26px',  width:'50%', margin:'auto', marginBottom:20, fontSize: '18px' }}>
        We at ​Janus Advisory Inc.. (together with our affiliates, “we”, “our”
        or “us”) respect your privacy and are strongly committed to keeping
        secure any information we obtain from you or about you. This Privacy
        Policy describes our practices with respect to Personal Information we
        collect from or about you when you use our website and services
        (collectively, “Services”).
      </p>
      <div className={style.collapseWrraper}>
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? (
            <div className={style.plusIcon}>
              <MinusOutlined />
            </div>
          ) : (
            <div className={style.plusIcon}>
              <PlusOutlined />
            </div>
          )
        }
        defaultActiveKey={["1"]}
        onChange={onChange}
      >
        <Panel header="1. Personal information we collect" key="1">
          <p>
            We collect information that alone or in combination with other
            information in our possession could be used to identify you
            (“Personal Information”) as follows:
          </p>
          <p style={{ marginTop: "20px" }}>
            Personal Information You Provide: We may collect Personal
            Information if you create an account to use our Services or
            communicate with us as follows
          </p>
          <p style={{ marginTop: "20px" }}>
            Account Information: When you create an account with us, we will
            collect information associated with your account, including your
            name, contact information, account credentials, payment card
            information, and transaction history, (collectively, “Account
            Information”)
          </p>
          <p style={{ marginTop: "20px" }}>
            User Content: When you use our Services, we may collect Personal
            Information that is included in the input, file uploads, or feedback
            that you provide to our Services (“Content”). 
          </p>
          <p style={{ marginTop: "20px" }}>
            Social Media Information: We have pages on social media sites like
            Instagram, Facebook, Medium, Twitter, YouTube and LinkedIn. When you
            interact with our social media pages, we will collect Personal
            Information that you elect to provide to us, such as your contact
            details (collectively, “Social Information”). In addition, the
            companies that host our social media pages may provide us with
            aggregate information and analytics about our social media activity.
          </p>
          <p style={{ marginTop: "20px" }}>
            Personal Information We Receive Automatically From Your Use of the
            Services: When you visit, use, and interact with the Services, we
            may receive the following information about your visit, use, or
            interactions (“Technical Information”):
          </p>
          <p style={{ marginTop: "20px" }}>
            Log Data: Information that your browser automatically sends whenever
            you user our website(“log data”). Log data includes your Internet
            Protocol address, browser type and settings, the date and time of
            your request, and how you interacted with our website. Usage Data:
            We may automatically collect information about your use of the
            Services, such as the types of content that you view or engage with,
            the features you use and the actions you take, as well as your time
            zone, country, the dates and times of access, user agent and
            version, type of computer or mobile device, computer connection, IP
            address, and the like.
          </p>
          <p style={{ marginTop: "20px" }}>
            Device Information: Includes name of the device, operating system,
            and browser you are using. Information collected may depend on the
            type of device you use and its settings.
          </p>
          <p style={{ marginTop: "20px" }}>
            Cookies: We use cookies to operate and administer our Services, and
            improve your experience on it. A “cookie” is a piece of information
            sent to your browser by a website you visit. You can set your
            browser to accept all cookies, to reject all cookies, or to notify
            you whenever a cookie is offered so that you can decide each time
            whether to accept it. However, refusing a cookie may in some cases
            preclude you from using, or negatively affect the display or
            function of, a website or certain areas or features of a website.
            For more details on cookies please visit All About Cookies.
            Analytics: We may use a variety of online analytics products that
            use cookies to help us analyze how users use our Services and
            enhance your experience when you use the Services.
          </p>
        </Panel>

        <Panel header="2. How we use personal information" key="2">
          <p style={{ marginTop: "10px" }}>
            We may use Personal Information for the following purposes:
          </p>
          <p style={{ marginTop: "10px" }}>
            To provide, administer, maintain, improve and/or analyze the
            Services;
            <br />
            To communicate with you;
            <br />
            To develop new programs and services;
            <br />
            To prevent fraud, criminal activity, or misuses of our Services, and
            to ensure the security of our IT systems, architecture, and
            networks; and
            <br />
            To comply with legal obligations and legal process and to protect
            our rights, privacy, safety, or property, and/or that of our
            affiliates, you, or other third parties.
          </p>
          <p style={{ marginTop: "20px" }}>
            Aggregated or De-Identified Information. We may aggregate or
            de-identify Personal Information and use the aggregated information
            to analyze the effectiveness of our Services, to improve and add
            features to our Services, to conduct research and for other similar
            purposes. In addition, from time to time, we may analyze the general
            behavior and characteristics of users of our Services and share
            aggregated information like general user statistics with third
            parties, publish such aggregated information or make such aggregated
            information generally available. We may collect aggregated
            information through the Services, through cookies, and through other
            means described in this Privacy Policy. We will maintain and use
            de-identified information in anonymous or de-identified form and we
            will not attempt to reidentify the information.
          </p>
        </Panel>
        <Panel header="3. Disclosure of personal information" key="3">
          <p style={{ marginTop: "10px" }}>
            In certain circumstances we may provide your Personal Information to
            third parties without further notice to you, unless required by the
            law:
            <br />
            ​Legal Requirements: If required to do so by law or in the good
            faith belief that such action is necessary to (i) comply with a
            legal obligation, including to meet national security or law
            enforcement requirements, (ii) protect and defend our rights or
            property, <br />
            (iii) prevent fraud, (iv) act in urgent circumstances to protect the
            personal safety of users of the Services, or the public, or (v)
            protect against legal liability.
          </p>
        </Panel>
        <Panel header="4. Your rights" key="4">
          <p style={{ marginTop: "10px" }}>
            Depending on location, individuals in the EEA, the UK, and across
            the globe may have certain statutory rights in relation to their
            Personal Information. For example, you may have the right to:
          </p>
          <p style={{ marginTop: "20px" }}>
            Access your Personal Information.
            <br />
            Delete your Personal Information.
            <br />
            Correct or update your Personal Information.
            <br />
            Transfer your Personal Information elsewhere.
            <br />
            Withdraw your consent to the processing of your Personal Information
            where we rely on consent as the legal basis for processing.
            <br />
            Object to or restrict the processing of your Personal Information
            where we rely on legitimate interests as the legal basis for
            processing.
          </p>
          <p style={{ marginTop: "20px" }}>
            You can exercise some of these rights through your Janu Advisory
            Services Inc. account. If you are unable to exercise your rights
            through your account, please send us your request using this form.
          </p>
        </Panel>
        <Panel header="5. California privacy rights" key="5">
          <p style={{ marginTop: "10px" }}>
            The following table provides additional information about how we
            disclose Personal Information. You can read more about the Personal
            Information we collect in “Personal information we collect” above,
            how we use Personal information in “How we use personal information”
            above, and how we retain personal information in “Security and
            Retention” below.
          </p>
          <p style={{ marginTop: "20px" }}>
            Category of Personal Information Disclosure of Personal Information
            Identifiers, such as your contact details We disclose this
            information to our affiliates, vendors and service providers, law
            enforcement, and parties involved in Transactions. Commercial
            Information, such as your transaction history. We disclose this
            information to our affiliates, vendors and service providers, law
            enforcement, and parties involved in Transactions.
            <br />
            Network Activity Information, such as Content and how you interact
            with our Services. We disclose this information to our affiliates,
            vendors and service providers, law enforcement, and parties involved
            in Transactions.
            <br />
            Geolocation Data. We disclose this information to our affiliates,
            vendors and service providers, law enforcement, and parties involved
            in Transactions.
          </p>
          <p style={{ marginTop: "20px" }}>
            Your account login credentials (Sensitive Personal Information)We
            disclose this information to our affiliates, vendors and service
            providers, law enforcement, and parties involved in Transactions.
          </p>
          <p style={{ marginTop: "20px" }}>
            To the extent provided for by law and subject to applicable
            exceptions, California residents have the following privacy rights
            in relation to their Personal Information:
          </p>
          <p style={{ marginTop: "10px" }}>
            The right to know information about our processing of your Personal
            Information, including the specific pieces of Personal Information
            that we have collected from you; The right to request deletion of
            your Personal Information;
            <br />
            The right to correct your Personal Information; and The right to be
            free from discrimination relating to the exercise of any of your
            privacy rights.
          </p>
          <p style={{ marginTop: "20px" }}>
            We don’t sell or share Personal Information as defined by the
            California Consumer Privacy Act, as amended by the California
            Privacy Rights Act. We also don’t process sensitive personal
            information for the purposes of inferring characteristics about a
            consumer.
          </p>
          <p style={{ marginTop: "20px" }}>
            Exercising Your Rights. California residents can exercise their CCPA
            privacy rights by filling out this form.
          </p>
          <p style={{ marginTop: "20px" }}>
            Verification. In order to protect your Personal Information from
            unauthorized access, change, or deletion, we may require you to
            verify your credentials before you can submit a request to know,
            correct, or delete Personal Information. If you do not have an
            account with us, or if we suspect fraudulent or malicious activity,
            we may ask you to provide additional Personal Information and proof
            of residency for verification. If we cannot verify your identity, we
            will not provide, correct, or delete your Personal Information.
          </p>
          <p style={{ marginTop: "20px" }}>
            Authorized Agents. you may submit a rights request through an
            authorized agent. If you do so, the agent must present signed
            written permission to act on your behalf and you may also be
            required to independently verify your identity and submit proof of
            your residency with us. Authorized agent requests can be submitted
            using this form.
          </p>
        </Panel>
        <Panel header="​6​. Links to other websites" key="6">
          <p style={{ marginTop: "10px" }}>
            The Service may contain links to other websites not operated or
            controlled by Janus Advisory Inc.  including social media services
            (“Third Party Sites”). The information that you share with Third
            Party Sites will be governed by the specific privacy policies and
            terms of service of the Third Party Sites and not by this Privacy
            Policy. By providing these links we do not imply that we endorse or
            have reviewed these sites. Please contact the Third Party Sites
            directly for information on their privacy practices and policies.
          </p>
        </Panel>
        <Panel header="7. Security and Retention" key="7">
          <p style={{ marginTop: "10px" }}>
            We implement commercially reasonable technical, administrative, and
            organizational measures to protect Personal Information both online
            and offline from loss, misuse, and unauthorized access, disclosure,
            alteration, or destruction. However, no Internet or email
            transmission is ever fully secure or error free. In particular,
            email sent to or from us may not be secure. Therefore, you should
            take special care in deciding what information you send to us via
            the Service or email. In addition, we are not responsible for
            circumvention of any privacy settings or security measures contained
            on the Service, or third party websites.
          </p>
          <p style={{ marginTop: "20px" }}>
            We’ll retain your Personal Information for only as long as we need
            in order to provide our Service to you, or for other legitimate
            business purposes such as resolving disputes, safety and security
            reasons, or complying with our legal obligations. How long we retain
            Personal Information will depend on several factors, such as the
            amount, nature, and sensitivity of the information, the potential
            risk of harm from unauthorized use or disclosure, our purpose for
            processing the information, and any legal requirements.
          </p>
        </Panel>
        <Panel header="9.  Your choices" key="8">
          <p style={{ marginTop: "10px" }}>
            If you choose not to provide Personal Information that is needed to
            use some features of our Service, you may be unable to use those
            features.
          </p>
        </Panel>
        <Panel header="10.Changes to the privacy policy" key="9">
          <p style={{ marginTop: "10px" }}>
            We may change this Privacy Policy at any time. When we do, we will
            post an updated version on this page, unless another type of notice
            is required by applicable law. By continuing to use our Service or
            providing us with Personal Information after we have posted an
            updated Privacy Policy, or notified you by other means, you consent
            to the revised Privacy Policy.
          </p>
        </Panel>
        <Panel header="11.​How to contact us" key="10">
          <p style={{ marginTop: "10px" }}>
            Please contact support if you have any questions or concerns not
            already addressed in this Privacy Policy.
          </p>
        </Panel>
      </Collapse>
</div>
    </div>
  );
});

export default memo(PrivacyPolicy);
