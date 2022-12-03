import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AmmRust } from "../target/types/amm_rust";

describe("amm-rust", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AmmRust as Program<AmmRust>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
