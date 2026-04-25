"use client"

import RovnoLogotypeIcon from "./rovno-dev-logotype/rovno-dev-logotype-icon";
import { ROUTES } from "@/utils/constants/routes";
import { Container } from "../ui/container";
import { useState } from "react";
import MakeOrderModal from "./make-order-modal/make-order-modal";

export default function BottomAppBar() {
  const [open, setOpen] = useState(false);

  const links = [
    ROUTES.cases,
    ROUTES.about,
    // ROUTES.,
  ]

  return (
    <nav
      style={{
        background: `linear-gradient(0deg, ${colorStyles.dark.background.globe.default}, ${colorStyles.dark.background.globe.default}00)`,
        position: 'fixed',
        bottom: 0,
        left: 0,
        paddingBottom: '30px',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container
        variant={isSM ? 'full-width' : 'default'}
        className="flex justify-center"
      >
        <div
          className="w-auto h-[70px] flex"
          aria-label="Bottom app bar"
          style={{
            border: `1px solid ${colorStyles.dark.background.border.default}`,
            borderRadius: 1000,
            background: colorStyles.dark.background.globe.default,
          }}
        >
          <div
            className="
            flex justify-center gap-[0.75rem] items-center w-full
            pr-[1rem] md:pr-[1.5rem]
            pl-[1.5rem] md:pl-[2rem]
            "
          >
            {isSM ? (
              <Button variant="text" className="h-full">
                <MenuIcon style={{ color: colorStyles['dark'].text.primary.default }} />
              </Button>
            ) : links.map((link, key) => {
              const Icon = link.icon.standard.default;

              return (
                <Button
                  variant="text"
                  className="w-full"
                  style={{ padding: '1rem', flexDirection: 'column' }}
                  key={key}
                >
                  <Icon
                    style={{
                      color: colorStyles['dark'].text.tertiary.default
                    }}
                  />
                  <Title variant="tiny" className="!text-[0.8rem]" color={colorStyles['dark'].text.secondary.default}>
                    {link.title.default}
                  </Title>
                </Button>
              )
            })}
          </div>
          <Button

            onClick={() => setOpen(true)}
            startIcon={<RovnoLogotypeIcon width={24} />}
            variant={open ? "tonal" : `contained`}
            sx={{
              whiteSpace: 'nowrap',
              minWidth: 'max-content',
              width: 'auto',
              flexShrink: 0,
              borderRadius: "0 1000px 1000px 0",
              paddingInline: '1.5rem',
              height: "100%",
            }}
          >
            Оформить заказ
          </Button>
          <MakeOrderModal
            onClose={() => setOpen(false)}
            setOpen={setOpen}
            open={open}
            keepMounted
          />
        </div>
      </Container>
    </nav >
  );
}
