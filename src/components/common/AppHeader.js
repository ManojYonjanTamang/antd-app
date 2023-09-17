import React, { useState } from "react";

import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

function AppHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="#hero">Tech</a>
        </div>

        <div className="mobileHidden">
          {/* <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Feature" />
            <Link href="#works" title="Works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#package" title="Package" />
            <Link href="#contact" title="Contact" />
          </Anchor> */}

          <Anchor
            targetOffset="65"
            items={[
              {
                key: "part-1",
                href: "#hero",
                title: "Home",
              },
              {
                key: "part-2",
                href: "#about",
                title: "About",
              },
              {
                key: "part-3",
                href: "#feature",
                title: "Feature",
              },
              {
                key: "part-4",
                href: "#works",
                title: "Works",
              },
              {
                key: "part-5",
                href: "#faq",
                title: "FAQ",
              },
              {
                key: "part-6",
                href: "#package",
                title: "Package",
              },
              {
                key: "part-7",
                href: "#contact",
                title: "Contact",
              },
            ]}
          />
        </div>

        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars" />
          </Button>
          <Drawer placement="right" onClose={onClose} open={open}>
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Feature" />
              <Link href="#works" title="Works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#package" title="Package" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
