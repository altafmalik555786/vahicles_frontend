import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { observer } from "mobx-react";
import { memo } from "react";
import style from "./style.module.scss";
const { Panel } = Collapse;

interface Props {}
const TermOfUse: React.FC<Props> = observer(({ ...props }) => {
  const onChange = (key: string | string[]) => {};
  return (
    <div className={style.mainWrraper}>
        <h1 style={{textAlign:'center'}}>Terms of use</h1>
        <p style={{textAlign:'center'}}>Updated: April 03, 2023</p>
        <p style={{textAlign:'center'}}>Thank you for using Climate Finance Co-pilot </p>
          <p style={{lineHeight:'26px', width:'50%', margin:'auto', marginBottom:20}}>
            These Terms of Use apply when you use the services of Janus Advisory
            Service Inc. or our affiliates, including our application
            programming interface, software, tools, developer services, data,
            documentation, and websites (“Services”). The Terms include our
            Service Terms, Sharing & Publication Policy, Usage Policies, and
            other documentation, guidelines, or policies we may provide in
            writing. By using our Services, you agree to these Terms. Our
            Privacy Policy explains how we collect and use personal information.
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
        <Panel header="1. Registration and Access" key="1">
          <p>
            You must be at least 13 years old to use the Services. If you are
            under 18 you must have your parent or legal guardian’s permission to
            use the Services. If you use the Services on behalf of another
            person or entity, you must have the authority to accept the Terms on
            their behalf. You must provide accurate and complete information to
            register for an account. You may not make your access credentials or
            account available to others outside your organization, and you are
            responsible for all activities that occur using your credentials.
          </p>
        </Panel>
        <Panel header="2. Usage Requirements" key="2">
          <p>
            (a) Use of Services. You may access, and we grant you a
            non-exclusive right to use, the Services in accordance with these
            Terms. You will comply with these Terms and all applicable laws when
            using the Services. We and our affiliates own all rights, title, and
            interest in and to the Services.
          </p>
          <p>
            (b) Feedback. We appreciate feedback, comments, ideas, proposals and
            suggestions for improvements. If you provide any of these things, we
            may use it without restriction or compensation to you.
          </p>
          <p>
            (c) Restrictions. You may not (i) use the Services in a way that
            infringes, misappropriates or violates any person’s rights; (ii)
            reverse assemble, reverse compile, decompile, translate or otherwise
            attempt to discover the source code or underlying components of
            models, algorithms, and systems of the Services (except to the
            extent such restrictions are contrary to applicable law); (iii) use
            output from the Services to develop models that compete with Janus
            Advisory Services, use any automated or programmatic method to
            extract data or output from the Services, including scraping, web
            harvesting, or web data extraction; (v) represent that output from
            the Services was human-generated when it is not or otherwise violate
            our Usage Policies; (vii) buy, sell, or transfer API keys without
            our prior consent; or (viii) if you are using the API in connection
            with a website or application directed at children, send us any
            personal information of children under 13 or the applicable age of
            digital consent.
          </p>
          <p>
            (d) Third Party Services. Any third-party software, services, or
            other products you use in connection with the Services are subject
            to their own terms, and we are not responsible for
            third party products.
          </p>
        </Panel>
        <Panel header="3. Content" key="3">
          <p>
            (a) Your Content. You may provide input to the Services (“Input”),
            and receive output generated and returned by the Services based on
            the Input (“Output”). Input and Output are collectively “Content.”
            As between the parties and to the extent permitted by applicable
            law, you own all Input. Subject to your compliance with these Terms,
            Janus Advisory Services hereby assigns to you all its right, title
            and interest in and to Output. This means you can use Content for
            any purpose, including commercial purposes such as sale or
            publication, if you comply with these Terms. Janus Advisory Services
            may use Content to provide and maintain the Services, comply with
            applicable law, and enforce our policies. You are responsible for
            Content, including for ensuring that it does not violate any
            applicable law or these Terms.
          </p>
          <p>
            (b) Similarity of Content. Due to the nature of machine learning,
            Output may not be unique across users and the Services may generate
            the same or similar output for Janus Advisory Services or a third
            party. For example, you may provide input to a model such as “What
            color is the sky?” and receive output such as “The sky is blue.”
            Other users may also ask similar questions and receive the same
            response. Responses that are requested by and generated for other
            users are not considered your Content.
          </p>
          <p>
            (c) Accuracy. Artificial intelligence and machine learning are
            rapidly evolving fields of study. We are constantly working to
            improve our Services to make them more accurate, reliable, safe and
            beneficial. Given the probabilistic nature of machine learning, use
            of our Services may in some situations result in incorrect Output
            that does not accurately reflect real people, places, or facts. You
            should evaluate the accuracy of any Output as appropriate for your
            use case, including by using human review of the Output.
          </p>
        </Panel>
        <Panel header="4. Fees and Payments" key="4">
          <p>
            (a) Fees and Billing. You will pay all fees charged to your account
            (“Fees”) according to the prices and terms on the applicable pricing
            page, or as otherwise agreed between us in writing. We have the
            right to correct pricing errors or mistakes even if we have already
            issued an invoice or received payment. You will provide complete and
            accurate billing information including a valid and authorized
            payment method. We will charge your payment method on an agreed-upon
            periodic basis but may reasonably change the date on which the
            charge is posted. You authorize Janus Advisory Services and its
            affiliates, and our third-party payment processor(s), to charge your
            payment method for the Fees. If your payment cannot be completed, we
            will provide you written notice and may suspend access to the
            Services until payment is received. Fees are payable in U.S. dollars
            and are due upon invoice issuance. Payments are nonrefundable except
            as provided in this Agreement.
          </p>
          <p>
            (b) Taxes. Unless otherwise stated, Fees do not include federal,
            state, local, and foreign taxes, duties, and other similar
            assessments (“Taxes”). You are responsible for all Taxes associated
            with your purchase, excluding Taxes based on our net income, and we
            may invoice you for such Taxes. You agree to timely pay such Taxes
            and provide us with documentation showing the payment, or additional
            evidence that we may reasonably require. Janus Advisory Services
            uses the name and address in your account registration as the place
            of supply for tax purposes, so you must keep this information
            accurate and up-to-date.
          </p>
          <p>
            (c) Price Changes. We may change our prices by posting notice to
            your account and/or to our website. Price increases will be
            effective 14 days after they are posted, except for increases made
            for legal reasons or increases made to Beta Services (as defined in
            our Service Terms), which will be effective immediately. Any price
            changes will apply to the Fees charged to your account immediately
            after the effective date of the changes.
          </p>
          <p>
            (d) Disputes and Late Payments. If you want to dispute any Fees or
            Taxes, please contact Janus Advisory Services{" "}
            <span>customerservice@janusadvisoryinc.com</span> within thirty (30)
            days of the date of the disputed invoice. Undisputed amounts past
            due may be subject to a finance charge of 1.5% of the unpaid balance
            per month. If any amount of your Fees are past due, we may suspend
            your access to the Services after we provide you written notice
            of late payment.
          </p>
          <p>
            (e) Free Tier. You may not create more than one account to benefit
            from credits provided in the free tier of the Services. If we
            believe you are not using the free tier in good faith, we may charge
            you standard fees or stop providing access to the Services.
          </p>
        </Panel>
        <Panel
          header="5. Confidentiality, Security and Data Protection"
          key="5"
        >
          <p>
            (a) Confidentiality. You may be given access to Confidential
            Information of Janus Advisory Services, its affiliates and other
            third parties. You may use Confidential Information only as needed
            to use the Services as permitted under these Terms. You may not
            disclose Confidential Information to any third party, and you will
            protect Confidential Information in the same manner that you protect
            your own confidential information of a similar nature, using at
            least reasonable care. Confidential Information means nonpublic
            information that Janus Advisory Services or its affiliates or third
            parties designate as confidential or should reasonably be considered
            confidential under the circumstances, including software,
            specifications, and other nonpublic business information.
            Confidential Information does not include information that: (i) is
            or becomes generally available to the public through no fault of
            yours; (ii) you already possess without any confidentiality
            obligations when you received it under these Terms; (iii) is
            rightfully disclosed to you by a third party without any
            confidentiality obligations; or (iv) you independently developed
            without using Confidential Information. You may disclose
            Confidential Information when required by law or the valid order of
            a court or other governmental authority if you give reasonable prior
            written notice to Janus Advisory Services and use reasonable efforts
            to limit the scope of disclosure, including assisting us with
            challenging the disclosure requirement, in each case where possible.
          </p>
          <p>
            (b) Security. You must implement reasonable and appropriate measures
            designed to help secure your access to and use of the Services. If
            you discover any vulnerabilities or breaches related to your use of
            the Services, you must promptly contact Janus Advisory Services and
            provide details of the vulnerability or breach.
          </p>
          <p>
            (c) Processing of Personal Data. If you use the Services to process
            personal data, you must provide legally adequate privacy notices and
            obtain necessary consents for the processing of such data, and you
            represent to us that you are processing such data in accordance with
            applicable law.{" "}
          </p>
        </Panel>
        <Panel header="6. Term and Termination" key="6">
          <p>
            (a) Termination; Suspension. These Terms take effect when you first
            use the Services and remain in effect until terminated. You may
            terminate these Terms at any time for any reason by discontinuing
            the use of the Services and Content. We may terminate these Terms
            for any reason by providing you at least 30 days’ advance notice. We
            may terminate these Terms immediately upon notice to you if you
            materially breach Sections 2 (Usage Requirements), 5
            (Confidentiality, Security and Data Protection), 8 (Dispute
            Resolution) or 9 (General Terms), if there are changes in
            relationships with third party technology providers outside of our
            control, or to comply with law or government requests. We may
            suspend your access to the Services if you do not comply with these
            Terms, if your use poses a security risk to us or any third party,
            or if we suspect that your use is fraudulent or could subject us or
            any third party to liability.
          </p>
          <p>
            (b) Effect on Termination. Upon termination, you will stop using the
            Services and you will promptly return or, if instructed by us,
            destroy any Confidential Information. The sections of these Terms
            which by their nature should survive termination or expiration
            should survive, including but not limited to Sections 3 and 5-9.
          </p>
        </Panel>
        <Panel
          header="7. Indemnification; Disclaimer of Warranties; Limitations on Liability"
          key="7"
        >
          <p>
            (a) Indemnity. You will defend, indemnify, and hold harmless us, our
            affiliates, and our personnel, from and against any claims, losses,
            and expenses (including attorneys’ fees) arising from or relating to
            your use of the Services, including your Content, products or
            services you develop or offer in connection with the Services, and
            your breach of these Terms or violation of applicable law.
          </p>
          <p>
            (b) Disclaimer. THE SERVICES ARE PROVIDED “AS IS.” EXCEPT TO THE
            EXTENT PROHIBITED BY LAW, WE AND OUR AFFILIATES AND LICENSORS MAKE
            NO WARRANTIES (EXPRESS, IMPLIED, STATUTORY OR OTHERWISE) WITH
            RESPECT TO THE SERVICES, AND DISCLAIM ALL WARRANTIES INCLUDING BUT
            NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, SATISFACTORY QUALITY, NON-INFRINGEMENT, AND
            QUIET ENJOYMENT, AND ANY WARRANTIES ARISING OUT OF ANY COURSE OF
            DEALING OR TRADE USAGE. WE DO NOT WARRANT THAT THE SERVICES WILL BE
            UNINTERRUPTED, ACCURATE OR ERROR FREE, OR THAT ANY CONTENT WILL BE
            SECURE OR NOT LOST OR ALTERED.
          </p>
          <p>
            (c) Limitations of Liability. NEITHER WE NOR ANY OF OUR AFFILIATES
            OR LICENSORS WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF
            PROFITS, GOODWILL, USE, OR DATA OR OTHER LOSSES, EVEN IF WE HAVE
            BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE
            LIABILITY UNDER THESE TERMS SHALL NOT EXCEED THE GREATER OF THE
            AMOUNT YOU PAID FOR THE SERVICE THAT GAVE RISE TO THE CLAIM DURING
            THE 12 MONTHS BEFORE THE LIABILITY AROSE OR ONE HUNDRED DOLLARS
            ($100). THE LIMITATIONS IN THIS SECTION APPLY ONLY TO THE MAXIMUM
            EXTENT PERMITTED BY APPLICABLE LAW.
          </p>
        </Panel>
        <Panel header="8. Dispute Resolution" key="8">
          <h4>
            YOU AGREE TO THE FOLLOWING MANDATORY ARBITRATION AND CLASS ACTION
            WAIVER PROVISIONS:
          </h4>
          <p>
            (a) MANDATORY ARBITRATION. You and Janus Advisory Services agree to
            resolve any past or present claims relating to these Terms or our
            Services through final and binding arbitration, except that you have
            the right to opt out of these arbitration terms, and future changes
            to these arbitration terms, by filling out this form within 30 days
            of agreeing to these arbitration terms or the relevant changes. 
          </p>
          <p>
            (b) Informal Dispute Resolution. We would like to understand and try
            to address your concerns prior to formal legal action. Before filing
            a claim against Janus Advisory Services, you agree to try to resolve
            the dispute informally by contacting us. If we are unable to resolve
            a dispute within 60 days, you may bring a formal proceeding. Any
            statute of limitations will be tolled during the 60-day resolution
            process. If you reside in the EU, the European Commission provides
            for an online dispute resolution platform, which you can access at
            https://ec.europa.eu/consumers/odr.
          </p>
          <p>
            (c) Arbitration Forum. Either party may commence binding arbitration
            through ADR Services, an alternative dispute resolution provider.
            The parties will pay equal shares of the arbitration fees. If the
            arbitrator finds that you cannot afford to pay the arbitration fees
            and cannot obtain a waiver, Janus Advisory Services will pay them
            for you. Janus Advisory Services will not seek its attorneys’ fees
            and costs in arbitration unless the arbitrator determines that your
            claim is frivolous.
          </p>
          <p>
            (d) Arbitration Procedures. The arbitration will be conducted by
            telephone, based on written submissions, video conference, or in
            person in Miami, Florida or at another mutually agreed location. The
            arbitration will be conducted by a sole arbitrator by ADR Services
            under its then-prevailing rules. All issues are for the arbitrator
            to decide, except a California court has the authority to determine
            (i) the scope, enforceability, and arbitrability of this Section 8,
            including the mass filing procedures below, and (ii) whether you
            have complied with the pre-arbitration requirements in this section.
            The amount of any settlement offer will not be disclosed to the
            arbitrator by either party until after the arbitrator determines the
            final award, if any.
          </p>
          <p>
            (e). Exceptions. This arbitration section does not require
            arbitration of the following claims: (i) individual claims brought
            in small claims court; and (ii) injunctive or other equitable relief
            to stop unauthorized use or abuse of the Services or intellectual
            property infringement.
          </p>
        </Panel>
        <Panel header="9. General Terms" key="9">
          <p>
            (a) Relationship of the Parties. These Terms do not create a
            partnership, joint venture or agency relationship between you and
            Janus Advisory Services or any of Janus Advisory Services
            affiliates. Janus Advisory Services and you are independent
            contractors and neither party will have the power to bind the other
            or to incur obligations on the other’s behalf without the other
            party’s prior written consent.
          </p>
          <p>
            (b) Use of Brands. You may not use Janus Advisory Services or any of
            its affiliates’ names, logos, or trademarks, without our prior
            written consent.
          </p>
          <p>
            (c) U.S. Federal Agency Entities. The Services were developed solely
            at private expense and are commercial computer software and related
            documentation within the meaning of the applicable U.S. Federal
            Acquisition Regulation and agency supplements thereto.
          </p>
          <p>
            (d) Copyright Complaints. If you believe that your intellectual
            property rights have been infringed, please send notice to the
            address below or fill out this form. We may delete or disable
            content alleged to be infringing and may terminate accounts of
            repeat infringers.
          </p>
          <p>
            (e) Assignment and Delegation. You may not assign or delegate any
            rights or obligations under these Terms, including in connection
            with a change of control. Any purported assignment and delegation
            shall be null and void. We may assign these Terms in connection with
            a merger, acquisition or sale of all or substantially all of our
            assets, or to any affiliate or as part of a corporate
            reorganization.
          </p>
          <p>
            (f) Modifications. We may amend these Terms from time to time by
            posting a revised version on the website, or if an update materially
            adversely affects your rights or obligations under these Terms we
            will provide notice to you either by emailing the email associated
            with your account or providing an in-product notification. Those
            changes will become effective no sooner than 30 days after we notify
            you. All other changes will be effective immediately. Your continued
            use of the Services after any change means you agree to such change.
          </p>
          <p>
            (g) Notices. All notices will be in writing. We may notify you using
            the registration information you provided or the email address
            associated with your use of the Services. Service will be deemed
            given on the date of receipt if delivered by email or on the date
            sent via courier if delivered by post. Janus Advisory Services
            accepts service of process at this address: Janus Advisory Services
            Inc 2645 Executive Park Drive, Suite 640 Weston, Fl. 33331Attn:{" "}
            <span>admin@janusadvisoryservices.inc.com</span>
          </p>
          <p>
            (h) Waiver and Severability. If you do not comply with these Terms,
            and Janus Advisory Services does not take action right away, this
            does not mean Janus Advisory Services is giving up any of our
            rights. Except as provided in Section 8, if any part of these Terms
            is determined to be invalid or unenforceable by a court of competent
            jurisdiction, that term will be enforced to the maximum extent
            permissible, and it will not affect the enforceability of any other
            terms.
          </p>
          <p>
            (i) Export Controls. The Services may not be used in or for the
            benefit of, exported, or re-exported (a) into any U.S. embargoed
            countries (collectively, the “Embargoed Countries”) or (b) to anyone
            on the U.S. Treasury Department’s list of Specially Designated
            Nationals, any other restricted party lists (existing now or in the
            future) identified by the Office of Foreign Asset Control, or the
            U.S. Department of Commerce Denied Persons List or Entity List, or
            any other restricted party lists (collectively, “Restricted Party
            Lists”). You represent and warrant that you are not located in any
            Embargoed Countries and not on any such restricted party lists. You
            must comply with all applicable laws related to Embargoed Countries
            or Restricted Party Lists, including any requirements or obligations
            to know your end users directly.
          </p>
          <p>
            (j) Equitable Remedies. You acknowledge that if you violate or
            breach these Terms, it may cause irreparable harm to Janus Advisory
            Services and its affiliates, and Janus Advisory Services shall have
            the right to seek injunctive relief against you in addition to any
            other legal remedies.
          </p>
          <p>
            (k) Entire Agreement. These Terms and any policies incorporated in
            these Terms contain the entire agreement between you and Janus
            Advisory Services regarding the use of the Services and, other than
            any Service specific terms of use or any applicable enterprise
            agreements, supersedes any prior or contemporaneous agreements,
            communications, or understandings between you and Janus Advisory
            Services on that subject.
          </p>
          <p>
            (l) Jurisdiction, Venue and Choice of Law. These Terms will be
            governed by the laws of the State of California, excluding
            California’s conflicts of law rules or principles. Except as
            provided in the “Dispute Resolution” section, all claims arising out
            of or relating to these Terms will be brought exclusively in the
            federal or state courts of San Francisco County, California, USA.
          </p>
        </Panel>
      </Collapse>
          </div>

    </div>
  );
});

export default memo(TermOfUse);
