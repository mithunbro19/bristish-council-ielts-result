import React from "react";

export default function Header() {
  return (
    <header className="bc-header">
      {/* Top red bar */}
      <div className="bc-topbar">
        <div className="bc-container bc-topbar__inner">
          <button className="bc-linklike" type="button">
            English <span aria-hidden="true">▼</span>
          </button>

          <span className="bc-topbar__user">Hello Md. Mithun Hossen Zehad</span>

          <button className="bc-linklike bc-linklike--strong" type="button">
            Log out
          </button>
        </div>
      </div>
    </header>
  );
}
