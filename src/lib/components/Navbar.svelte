<nav class="navbar">
  <a href="/" class="navbar__title">DEV GAUNTLET</a>
  <a href="/challenges">Challenges</a>
  <a href="/profile">Profile</a>

  <div class="navbar__right-content">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  </div>
</nav>


<style lang="scss">
  .navbar {
    background-color: var(--red-0);
    width: 100%;
    height: 4.5rem;
    display: flex;
    box-shadow: rgba(219, 82, 82, 0.35) 0px 5px 15px;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;
    font-size: var(--font-md);
  
    &__right-content {
      display: flex;
      gap: 1rem;
      justify-content: end;
      width: 100%;
    }
  
    &__title {
      width: 15.5rem;
      font-size: var(--font-lg);
    }
  
    a {
      color: white;
      text-decoration: none;
      transition: all 0.15s ease-in-out;
  
      &:hover {
        transform: scale(1.1) rotate(3deg);
      }
    }
  }  
</style>
