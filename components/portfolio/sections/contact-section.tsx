import { SectionTitle } from "@/components/portfolio/ui/section-title";

type ContactSectionProps = {
  onExecuteCommand: () => void;
};

export function ContactSection({ onExecuteCommand }: ContactSectionProps) {
  return (
    <section id="contact" className="content-section">
      <SectionTitle eyebrow="Contact" title="Send A Command" />
      <div className="contact-shell">
        <div className="chat-window">
          <div className="chat-header">Server Chat</div>
          <div className="chat-body">
            <p>
              <span className="chat-name">[Visitor]</span> /msg YourName Let&apos;s build something ambitious.
            </p>
            <p>
              <span className="chat-name">[System]</span> Fill the command block below and swap in your real links.
            </p>
          </div>
        </div>

        <form className="command-form">
          <label>
            Name
            <input type="text" placeholder="PlayerOne" />
          </label>
          <label>
            Email
            <input type="email" placeholder="player@example.com" />
          </label>
          <label>
            Message
            <textarea rows={5} placeholder="/tell YourName I have a project idea..." />
          </label>
          <button type="button" className="primary-button" onClick={onExecuteCommand}>
            Execute Command
          </button>
        </form>
      </div>
    </section>
  );
}
