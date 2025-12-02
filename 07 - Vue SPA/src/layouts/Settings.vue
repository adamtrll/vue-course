<template>
    <h1>Settings</h1>
    <section>
        <aside>
            <nav>
                <RouterLink :to="{ name: 'account.profile' }">
                    Profile
                </RouterLink>
                <RouterLink :to="{ name: 'account.password' }">
                    Password
                </RouterLink>
            </nav>
        </aside>
        <div>
            <RouterView />
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    min-height: 500px;
}
aside {
    padding: 1rem;
    width: 200px;
    border-right: 1px solid #333;
}

aside nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section > div {
    padding: 1rem;
}
</style>
